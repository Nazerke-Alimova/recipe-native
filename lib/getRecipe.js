export const getRecipe = async (activeCategory) => {
    const req = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${activeCategory}`
    );
    const res = await req.json();
    return res.meals;
  };
  
  