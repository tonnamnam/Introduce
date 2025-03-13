document.addEventListener('DOMContentLoaded', function() {
    // เลื่อนแถบนำทางเมื่อเลื่อนหน้า
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.padding = '10px 0';
            navbar.style.backgroundColor = 'rgba(22, 22, 26, 0.95)';
        } else {
            navbar.style.padding = '20px 0';
            navbar.style.backgroundColor = 'rgba(22, 22, 26, 0.9)';
        }
    });

    // แอนิเมชั่นแถบทักษะ
    const skillSection = document.querySelector('.skills-section');
    if (skillSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const skillBars = document.querySelectorAll('.skill-progress');
                    skillBars.forEach(bar => {
                        const percent = bar.getAttribute('data-percent');
                        bar.style.width = percent + '%';
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        observer.observe(skillSection);
    }

    // แบบฟอร์มติดต่อ
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // เก็บข้อมูลฟอร์ม
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            // จำลองการส่งข้อมูล (ในสถานการณ์จริงจะส่งไปยังเซิร์ฟเวอร์)
            console.log('ข้อมูลที่ส่ง:', formData);
            
            // แสดงข้อความสำเร็จ (ตัวอย่าง)
            alert('ส่งข้อความสำเร็จ! ในโปรเจ็กต์จริงจะส่งไปยังเซิร์ฟเวอร์');
            
            // รีเซ็ตฟอร์ม
            contactForm.reset();
        });
    }
    
    // แอนิเมชั่นเมื่อเลื่อนหน้า
    const fadeElements = document.querySelectorAll('.feature-card, .other-skill-card, .timeline-item, .education-card, .cert-card');
    
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fadeIn');
                fadeObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    fadeElements.forEach(element => {
        fadeObserver.observe(element);
    });

    const certCards = document.querySelectorAll('.cert-card');
    
    certCards.forEach(card => {
        card.addEventListener('click', function() {
            const imgSrc = this.getAttribute('data-img');
            const imgTitle = this.getAttribute('data-title');
            
            document.getElementById('modalCertImg').src = imgSrc;
            document.getElementById('certModalLabel').textContent = imgTitle;
        });
    });

});