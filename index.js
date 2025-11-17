// burger-menu 
document.addEventListener('DOMContentLoaded', function () {
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    mobileMenu.addEventListener('click', function () {
        mobileMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Закрытие меню при клике на ссылку
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            mobileMenu.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
});
// burger-menu 
// акардион
 document.querySelectorAll('.accordion-header').forEach(header => {
            header.addEventListener('click', () => {
                const content = header.nextElementSibling;
                const icon = header.querySelector('.accordion-icon');
                
                // Закрываем все открытые элементы
                document.querySelectorAll('.accordion-content').forEach(item => {
                    if (item !== content && item.classList.contains('active')) {
                        item.classList.remove('active');
                        item.previousElementSibling.querySelector('.accordion-icon').textContent = '+';
                    }
                });
                
                // Переключаем текущий элемент
                content.classList.toggle('active');
                icon.textContent = content.classList.contains('active') ? '−' : '+';
            });
        });
// акардион
// персоан 
        document.addEventListener('DOMContentLoaded', function() {
            createConnectors();
            
            window.addEventListener('resize', function() {
                // Удаляем старые соединители
                const oldConnectors = document.querySelectorAll('.connector, .connector-dot');
                oldConnectors.forEach(el => el.remove());
                
                // Создаем новые
                createConnectors();
            });
            
            function createConnectors() {
                const textItems = document.querySelectorAll('.text-item');
                const connectionPoints = document.querySelectorAll('.connection-point');
                const container = document.querySelector('.content-per');
                
                // Для узких экранов не создаем соединители
                if (window.innerWidth <= 900) return;
                
                textItems.forEach((item, index) => {
                    if (index < connectionPoints.length) {
                        const itemRect = item.getBoundingClientRect();
                        const pointRect = connectionPoints[index].getBoundingClientRect();
                        const containerRect = container.getBoundingClientRect();
                        
                        // Вычисляем координаты
                        const startX = itemRect.right - containerRect.left;
                        const startY = itemRect.top + itemRect.height / 2 - containerRect.top;
                        const endX = pointRect.left + pointRect.width / 2 - containerRect.left;
                        const endY = pointRect.top + pointRect.height / 2 - containerRect.top;
                        
                        // Создаем пунктирную линию
                        const line = document.createElement('div');
                        line.className = 'connector';
                        
                        // Вычисляем длину и угол
                        const length = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2));
                        const angle = Math.atan2(endY - startY, endX - startX) * 180 / Math.PI;
                        
                        // Устанавливаем стили
                        line.style.width = `${length}px`;
                        line.style.left = `${startX}px`;
                        line.style.top = `${startY}px`;
                        line.style.transform = `rotate(${angle}deg)`;
                        
                        container.appendChild(line);
                        
                        // Добавляем точку в начале линии
                        const startDot = document.createElement('div');
                        startDot.className = 'connector-dot';
                        startDot.style.left = `${startX - 4}px`;
                        startDot.style.top = `${startY - 4}px`;
                        container.appendChild(startDot);
                    }
                });
            }
        });
// персона