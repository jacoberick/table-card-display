// Some helper functions used throughout the project

export const makePercentage = (decNum) => `${Math.round(decNum * 100)}%`;

export const getTierStars = (tier) =>
  !isNaN(tier) && [...Array(Number(tier))].map((x) => "★").join("");
