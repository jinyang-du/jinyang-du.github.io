(function () {
    var root = document.documentElement;
    var toggle = document.getElementById('theme-toggle');
    var icon = document.getElementById('theme-toggle-icon');

    if (!toggle || !icon) {
        return;
    }

    function updateThemeControls(theme) {
        var isDark = theme === 'dark';
        icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
        toggle.setAttribute('aria-pressed', String(isDark));
        toggle.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
        toggle.setAttribute('title', isDark ? 'Switch to light theme' : 'Switch to dark theme');
    }

    updateThemeControls(root.getAttribute('data-theme') || 'light');

    toggle.addEventListener('click', function () {
        var nextTheme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        root.setAttribute('data-theme', nextTheme);
        try {
            window.localStorage.setItem('jinyangdu-theme', nextTheme);
        } catch (error) {
            // Theme switching still works when storage is unavailable.
        }
        updateThemeControls(nextTheme);
    });
}());
