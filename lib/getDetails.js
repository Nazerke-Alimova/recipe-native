export const getDetails = async (id) => {
    const req = await fetch(
     `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const res = await req.json();
    return res.meals;
  };
  