export default{
    toggleTheme(){
        const darkIcon = document.getElementById("theme-toggle-dark-icon");
        const lightIcon = document.getElementById("theme-toggle-light-icon");
        const themeToggle = document.getElementById("theme-toggle");
    
        if (!darkIcon || !lightIcon || !themeToggle) {
            console.error("One or more elements for dark mode toggling are missing.");
            return;
        }
    
        const currentTheme = localStorage.getItem("color-theme");
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
        // Determine initial theme and icon visibility
        const isDarkMode = currentTheme === "dark" || (!currentTheme && prefersDark);
    
        if (isDarkMode) {
            darkIcon.classList.remove("hidden");
            lightIcon.classList.add("hidden");
            document.documentElement.classList.add("dark");
        } else {
            darkIcon.classList.add("hidden");
            lightIcon.classList.remove("hidden");
            document.documentElement.classList.remove("dark");
        }
    
        themeToggle.addEventListener("click", () => {
            // Toggle icons
            darkIcon.classList.toggle("hidden");
            lightIcon.classList.toggle("hidden");
    
            // Toggle dark mode and update local storage
            const isCurrentlyDark = document.documentElement.classList.contains("dark");
            if (isCurrentlyDark) {
                document.documentElement.classList.remove("dark");
                localStorage.setItem("color-theme", "light");
            } else {
                document.documentElement.classList.add("dark");
                localStorage.setItem("color-theme", "dark");
            }
        });
    }
}