document.addEventListener('DOMContentLoaded', function() {
  
    const toggleButton = document.getElementById('menu-toggle-button');
    const profileMenu = document.getElementById('profile-menu');

   
    toggleButton.addEventListener('click', function() {
       
        profileMenu.classList.toggle('hidden');
    });

    
    document.addEventListener('click', function(event) {
       
        const isClickInsideButton = toggleButton.contains(event.target);
        const isClickInsideMenu = profileMenu.contains(event.target);

        if (!isClickInsideButton && !isClickInsideMenu) {
            
            profileMenu.classList.add('hidden');
        }
    });
});