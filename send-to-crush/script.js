const yesBtn = document.querySelector(".да-btn");
const noBtn = document.querySelector(".нет-btn");
const question = document.querySelector(".завтра пойти в школу?");
const gif = document.querySelector(".https://www.google.com/url?sa=i&url=https%3A%2F%2Fgiphy.com%2Fexplore%2Fpushen-cute&psig=AOvVaw1ouCCA8kIkvtUPM3Rq2uVZ&ust=1727189852671000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCOiOiuOp2YgDFQAAAAAdAAAAABAE");

// Change text and gif when the Yes button is clicked
yesBtn.addEventListener("click", () => {
  question.innerHTML = "You got Rickrolled 😘 (FOLLOW ME @kristel_tech or 7 years bad luck)";
  gif.src = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGI1cW5wMWhpaDF5b3pjdTF0OHZrcHJvaGkzOHJteDhmd245OGRnZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Vuw9m5wXviFIQ/giphy.gif";
});

// Make the No button move randomly on hover
noBtn.addEventListener("mouseover", () => {
  const wrapper = document.querySelector(".wrapper");
  const wrapperRect = wrapper.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();

  // Calculate max positions to ensure the button stays within the wrapper
  const maxX = wrapperRect.width - noBtnRect.width;
  const maxY = wrapperRect.height - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
