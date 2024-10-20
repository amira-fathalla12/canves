  const canvas = document.getElementById('memeCanvas');
  const ctx = canvas.getContext('2d');

  const image = new Image();
  image.src = 'assets/img.jpeg'; 
  image.onload = function () {
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

    ctx.font = '30px Arial';
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';

    ctx.shadowColor = 'red';
    ctx.shadowBlur = 7;
    ctx.shadowOffsetX = 3;
    ctx.shadowOffsetY = 3;

    const topText = "When you code all night";
    const bottomText = "But there's a bug in production";
    
    ctx.fillText(topText, canvas.width / 2, 20);

    ctx.textBaseline = 'bottom';
    ctx.fillText(bottomText, canvas.width / 2, canvas.height - 20);
  };