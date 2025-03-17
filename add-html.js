// Function to add .html extension to links
function addHtmlExtension() {
  const links = document.querySelectorAll('a');
  links.forEach(link => {
    if (link.href && !link.href.endsWith('.html') && !link.href.startsWith('#') && !link.href.includes('discord.gg')) {
      link.href += '.html';
    }
  });
}

// Call the function when the page loads
window.onload = addHtmlExtension;
