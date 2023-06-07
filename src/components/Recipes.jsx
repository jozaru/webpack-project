import React, { useState } from "react";
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

const Recepes = () => {
  const [recipe, setRecipe] = React.useState({});
  return (
    <div>
      <h3>Current Recipe:</h3>
      <button onClick={() => setRecipe(eleventShieldRecipe)}>
        Eleven Shield Recipe
      </button>
      <button onClick={() => setRecipe(eleventGountletsRecipe)}>
        Eleven Gountlets Recipe
      </button>
      <ul>
        {Object.keys(recipe).map((material) => (
          <li key={material}>
            {material}: {recipe[material]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recepes;
