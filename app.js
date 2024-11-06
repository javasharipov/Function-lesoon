function showTime() {
	const now = new Date()
	document.getElementById('timeDisplay').textContent = now.toLocaleTimeString()
}
