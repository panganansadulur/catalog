const whatsappNumber = '6281234567890';
const defaultMessage = 'Halo, saya tertarik dengan katalog Ina Cookies. Bisa minta pricelist terbaru?';

const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;

document.getElementById('waHero').href = waUrl;
document.getElementById('waFloat').href = waUrl;
document.getElementById('year').textContent = new Date().getFullYear();
