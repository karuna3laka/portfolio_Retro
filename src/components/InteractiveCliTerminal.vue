<template>
  <Teleport to="body">
    <div v-if="isOpen" class="terminal-modal-overlay" @click.self="closeTerminal">
      <div class="terminal-modal-card">
        
        <!-- Terminal Header -->
        <div class="terminal-modal-bar">
          <div class="terminal-modal-dots">
            <span class="dot red" @click="closeTerminal" title="Close Terminal"></span>
            <span class="dot yellow"></span>
            <span class="dot green"></span>
          </div>
          <span class="terminal-modal-title">npx karunathilaka --portfolio</span>
          <button class="terminal-close-btn" @click="closeTerminal">✕ ESC</button>
        </div>

        <!-- Terminal Output Screen -->
        <div class="terminal-modal-body" ref="terminalBodyRef">
          <!-- Command Logs -->
          <div v-for="(log, idx) in logs" :key="idx" class="terminal-log-line" :class="log.type">
            <template v-if="log.type === 'input'">
              <span class="terminal-prompt">$</span>
              <span class="terminal-command">{{ log.text }}</span>
            </template>
            <template v-else>
              <pre class="terminal-output-text">{{ log.text }}</pre>
            </template>
          </div>

          <!-- Interactive Choice Buttons -->
          <div v-if="awaitingChoice" class="terminal-options-grid">
            <button @click="selectOption('1')" class="option-btn">
              <span class="opt-num">[1]</span>
              <span class="opt-label">GitHub Profile</span>
              <span class="opt-url">↗ github.com</span>
            </button>
            <button @click="selectOption('2')" class="option-btn">
              <span class="opt-num">[2]</span>
              <span class="opt-label">LinkedIn Profile</span>
              <span class="opt-url">↗ linkedin.com</span>
            </button>
            <button @click="selectOption('3')" class="option-btn">
              <span class="opt-num">[3]</span>
              <span class="opt-label">Explore Projects</span>
              <span class="opt-url">↓ Scroll to Projects</span>
            </button>
            <button @click="selectOption('4')" class="option-btn">
              <span class="opt-num">[4]</span>
              <span class="opt-label">Download Resume / CV</span>
              <span class="opt-url">📄 PDF</span>
            </button>
            <button @click="selectOption('5')" class="option-btn">
              <span class="opt-num">[5]</span>
              <span class="opt-label">Contact Direct</span>
              <span class="opt-url">✉ Email</span>
            </button>
          </div>

          <!-- Active Prompt Input Line -->
          <form class="terminal-input-form" @submit.prevent="handleCommandSubmit">
            <span class="terminal-prompt">></span>
            <input 
              ref="inputFieldRef"
              type="text" 
              v-model="inputQuery"
              placeholder="Type 1-5, 'github', 'linkedin', or 'help'..."
              class="terminal-real-input"
              autofocus
            />
          </form>
        </div>

      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, watch, nextTick, onMounted, onUnmounted } from 'vue';
import { developerProfile } from '../data/portfolioData.js';

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['close']);

const inputQuery = ref('');
const awaitingChoice = ref(true);
const terminalBodyRef = ref(null);
const inputFieldRef = ref(null);

const logs = ref([
  { type: 'input', text: 'npx karunathilaka --portfolio' },
  { type: 'success', text: '✔ Initializing Karunathilaka Developer CLI v1.0.0...\n✔ Profile data synchronized.' },
  { type: 'info', text: '==================================================\n  Welcome to Karunathilaka\'s Interactive Terminal!\n==================================================\nWhere would you like to go?' }
]);

const scrollToBottom = () => {
  nextTick(() => {
    if (terminalBodyRef.value) {
      terminalBodyRef.value.scrollTop = terminalBodyRef.value.scrollHeight;
    }
  });
};

const selectOption = (choice) => {
  const val = choice.toLowerCase().trim();
  logs.value.push({ type: 'input', text: val });

  if (val === '1' || val.includes('git')) {
    logs.value.push({ type: 'success', text: '🚀 Redirecting to GitHub profile...' });
    setTimeout(() => {
      window.open(developerProfile.socials.github, '_blank');
    }, 600);
  } else if (val === '2' || val.includes('link') || val.includes('in')) {
    logs.value.push({ type: 'success', text: '🚀 Redirecting to LinkedIn profile...' });
    setTimeout(() => {
      window.open(developerProfile.socials.linkedin, '_blank');
    }, 600);
  } else if (val === '3' || val.includes('proj')) {
    logs.value.push({ type: 'success', text: '📍 Navigating to Portfolio Projects...' });
    setTimeout(() => {
      closeTerminal();
      const el = document.getElementById('projects');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 600);
  } else if (val === '4' || val.includes('cv') || val.includes('res')) {
    logs.value.push({ type: 'success', text: '📄 Initiating CV Download...' });
    setTimeout(() => {
      window.open('#', '_blank');
    }, 600);
  } else if (val === '5' || val.includes('cont') || val.includes('mail')) {
    logs.value.push({ type: 'success', text: '✉ Navigating to Contact Form...' });
    setTimeout(() => {
      closeTerminal();
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 600);
  } else if (val === 'help') {
    logs.value.push({ 
      type: 'info', 
      text: 'Available Commands:\n  1 or github   - Open GitHub Profile\n  2 or linkedin - Open LinkedIn Profile\n  3 or projects - View Portfolio Projects\n  4 or cv       - Download Resume PDF\n  5 or contact  - Contact Direct\n  clear         - Clear Terminal\n  exit          - Close Terminal' 
    });
  } else if (val === 'clear') {
    logs.value = [];
  } else if (val === 'exit') {
    closeTerminal();
  } else {
    logs.value.push({ type: 'error', text: `Command not recognized: "${val}". Type 'help' or select [1-5].` });
  }

  inputQuery.value = '';
  scrollToBottom();
};

const handleCommandSubmit = () => {
  if (!inputQuery.value.trim()) return;
  selectOption(inputQuery.value);
};

const closeTerminal = () => {
  emit('close');
};

const handleKeyDown = (e) => {
  if (e.key === 'Escape' && props.isOpen) {
    closeTerminal();
  }
};

watch(() => props.isOpen, (newVal) => {
  if (newVal) {
    nextTick(() => {
      if (inputFieldRef.value) inputFieldRef.value.focus();
      scrollToBottom();
    });
  }
});

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown);
});
</script>

<style scoped>
.terminal-modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 300;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(12px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  image-rendering: pixelated;
}

.terminal-modal-card {
  width: 100%;
  max-width: 720px;
  background: #000000;
  border: 2px solid #ffffff;
  box-shadow: 8px 8px 0px #00e5ff;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  font-family: var(--font-mono);
}

.terminal-modal-bar {
  background: #111111;
  padding: 0.6rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #333333;
}

.terminal-modal-dots {
  display: flex;
  gap: 6px;
}

.dot {
  width: 10px;
  height: 10px;
  cursor: pointer;
}
.dot.red { background: #ff5f56; }
.dot.yellow { background: #ffbd2e; }
.dot.green { background: #27c93f; }

.terminal-modal-title {
  color: #00e5ff;
  font-size: 0.8rem;
  font-weight: 700;
}

.terminal-close-btn {
  background: none;
  border: none;
  color: #888888;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  cursor: pointer;
}

.terminal-close-btn:hover {
  color: #ffffff;
}

.terminal-modal-body {
  padding: 1.25rem;
  max-height: 420px;
  overflow-y: auto;
  font-size: 0.85rem;
  line-height: 1.6;
  color: #ffffff;
}

.terminal-log-line {
  margin-bottom: 0.5rem;
}

.terminal-prompt {
  color: #00e5ff;
  font-weight: 700;
  margin-right: 0.5rem;
}

.terminal-command {
  color: #ffffff;
  font-weight: 600;
}

.terminal-output-text {
  font-family: var(--font-mono);
  white-space: pre-wrap;
  word-break: break-word;
}

.terminal-log-line.success .terminal-output-text {
  color: #34d399;
}

.terminal-log-line.info .terminal-output-text {
  color: #38bdf8;
}

.terminal-log-line.error .terminal-output-text {
  color: #f87171;
}

/* Interactive Options Grid */
.terminal-options-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.6rem;
  margin: 1rem 0;
}

.option-btn {
  background: #111111;
  border: 1px solid #333333;
  color: #ffffff;
  padding: 0.6rem 0.85rem;
  font-family: var(--font-mono);
  font-size: 0.8rem;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.1s step-end;
}

.option-btn:hover {
  background: #00e5ff;
  color: #000000;
  border-color: #00e5ff;
  box-shadow: 3px 3px 0px #ffffff;
  transform: translate(-1px, -1px);
}

.opt-num {
  font-weight: 700;

}

.option-btn:hover .opt-num {
  color: #000000;
}

.opt-label {
  font-weight: 600;
}

.opt-url {
  font-size: 0.7rem;
  opacity: 0.7;
}

/* Input Form */
.terminal-input-form {
  display: flex;
  align-items: center;
  margin-top: 0.75rem;
  border-top: 1px dashed #333333;
  padding-top: 0.75rem;
}

.terminal-real-input {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: #ffffff;
  font-family: var(--font-mono);
  font-size: 0.85rem;
}

.terminal-real-input::placeholder {
  color: #555555;
}
</style>
