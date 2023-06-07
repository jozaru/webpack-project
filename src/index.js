import "./styles/index.scss";

const eleventShieldRecipe = {
  leatherStrips: 2,
  ironIngot: 1,
  refinedMoonstone: 4,
};

const eleventGountletsRecipe = {
  ...eleventShieldRecipe,
  leather: 1,
  refinedMoonstone: 4,
};

console.log(eleventShieldRecipe);
console.log(eleventGountletsRecipe);
