const textArea = document.getElementById('input-text');
const countBtn = document.getElementById('count-button');
const wordCount = document.getElementById('word-count');
const charCount = document.getElementById('char-count');
textArea.addEventListener('input', () => {
	const text = textArea.value.trim();
	const words = text.split(/\s+/);
	const wordCountValue = words.length;
	const charCountValue = text.length;
	wordCount.textContent = `${wordCountValue} word${wordCountValue !== 1 ? 's' : ''}`;
	charCount.textContent = `${charCountValue} character${charCountValue !== 1 ? 's' : ''}`;
	if (text === '') {
		wordCount.textContent = '';
		charCount.textContent = '';
	}
});

countBtn.addEventListener('click', () => {
	const text = textArea.value.trim();
	const words = text.split(/\s+/);
	const wordCountValue = words.length;
	const charCountValue = text.length;
	wordCount.textContent = `${wordCountValue} word${wordCountValue !== 1 ? 's' : ''}`;
	charCount.textContent = `${charCountValue} character${charCountValue !== 1 ? 's' : ''}`;
});

