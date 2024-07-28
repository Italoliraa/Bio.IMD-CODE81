function openWhatsApp() {
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    var url = isMobile ? 'https://api.whatsapp.com/send?phone=5581983311850' : 'https://web.whatsapp.com/send?phone=5581983311850';
    window.open(url, '_blank');
}