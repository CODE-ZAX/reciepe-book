import React, { useContext, useEffect, useReducer, useState } from "react";
import { toast } from "react-toastify";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";

const RecipeContext = React.createContext();

export const useRecipe = () => useContext(RecipeContext);
const initialRecipes = [
  {
    favourite: true,
    id: 1,
    url: "https://i.ibb.co/WBw5c0H/Turkey-Pot-Pie.jpg",
    name: "Spaghetti Carbonara",
    details:
      "A classic Italian pasta dish with bacon, eggs, and Parmesan cheese.",
    yield: "1 pie",
    preptime: "15 minutes",
    cooktime: "10 minutes",
    totaltime: "25 minutes",
    ingredients: [
      { name: "Spaghetti", quantity: "12 oz" },
      { name: "Bacon", quantity: "8 oz" },
      { name: "Garlic", quantity: "2 cloves" },
      { name: "Eggs", quantity: "3" },
      { name: "Parmesan cheese", quantity: "1/2 cup" },
      { name: "Salt", quantity: "1/2 tsp" },
      { name: "Black pepper", quantity: "1/4 tsp" },
    ],
    instructions: [
      "Cook spaghetti according to package directions. Drain and set aside.",
      "In a large skillet, cook bacon over medium heat until crispy. Remove from skillet and chop into small pieces.",
      "In the same skillet, cook minced garlic over medium heat until fragrant.",
      "In a bowl, beat together eggs, grated Parmesan cheese, salt, and black pepper.",
      "Add the cooked spaghetti to the skillet with the garlic. Toss to combine.",
      "Remove the skillet from the heat and pour the egg mixture over the spaghetti. Toss quickly to coat the spaghetti with the egg mixture.",
      "Add the chopped bacon to the skillet and toss again.",
      "Serve hot and enjoy!",
    ],
  },
  {
    favourite: true,
    id: 2,
    url: "https://i.ibb.co/zx6Z50K/4458561-chocolate-coated-peanut-butter-crackers-Ponytail-Goddess-4x3-1-c387a5a3e49b48129734fab7f42b0.webp",
    name: "Chocolate Coated Peanut Butter Crackers",
    details:
      "Peanut butter-filled crackers dipped in chocolate and decorated with candy sprinkles are a decadent treat to have on hand. Store cookies between layers of waxed paper in cool, dry place, or in the refrigerator. These freeze well.",
    yield: "40 sandwich cookies",
    preptime: "30 minutes",
    cooktime: "5 - 15 minutes",
    totaltime: "50 minutes",
    ingredients: [
      { name: "Chunky peanut butter", quantity: "3/4 cups" },
      {
        name: "Chocolate almond bark, broken into pieces",
        quantity: "2 pounds",
      },
      { name: "Round crackers", quantity: "80" },
      { name: "Colored candy sprinkles", quantity: "2 1/4 ounces" },
    ],
    instructions: [
      "Spread approximately 1 teaspoon peanut butter onto each cracker half. Press peanut butter sides together to form 40 peanut butter-filled sandwich cookies.",
      "Melt almond bark in the top of a double boiler over hot, but not boiling, water. Reduce heat and keep melted chocolate in top of double boiler over simmering water.",
      "Dip each sandwich cookie into the melted chocolate, allowing excess to drain back into pot.",
      "Place coated cookies onto waxed paper and immediately sprinkle with candy sprinkles so they adhere to the melted chocolate.",
      "Place cookies in the refrigerator until chocolate has set, about 15 minutes.",
    ],
  },
  {
    favourite: true,
    id: 3,
    url: "https://i.ibb.co/9Zn3P9t/h3sfmrs8-cookie-625x300-28-September-22.jpg",
    name: "Cranberry Pumpkin Cookies",
    details: "Soft and cakey pumpkin-cranberry cookies.",
    yield: "3 dozen",
    preptime: "20 minutes",
    cooktime: "15 minutes",
    totaltime: "35 minutes",
    ingredients: [
      { name: "White sugar", quantity: "1 cup" },
      { name: "Butter, softened", quantity: "1/2 cup" },
      { name: "Solid pack pumpkin puree", quantity: "1 cup" },
      { name: "Large egg", quantity: "1" },
      { name: "Vanilla extract", quantity: "1 tsp" },
      { name: "All-purpose flour", quantity: "2 1/4 cups" },
      { name: "Baking powder", quantity: "2 teaspoons" },
      { name: "Baking soda", quantity: "1 teaspoons" },
      { name: "Ground cinnamon", quantity: "1 teaspoons" },
      { name: "Salt", quantity: "1/2 teaspoons" },
      { name: "Fresh cranberries", quantity: "1 cup" },
      { name: "Chopped walnuts", quantity: "1/2 cup" },
      { name: "Orange zest", quantity: "1 tablespoon" },
    ],
    instructions: [
      "Preheat the oven to 375 degrees F (190 degrees C). Grease two cookie sheets.",
      "Cream sugar and butter in a large bowl with an electric mixer until light and fluffy. Mix in pumpkin purée, egg, and vanilla.",
      "Sift flour, baking powder, baking soda, cinnamon, and salt together into a medium bowl. Stir flour mixture into pumpkin mixture until well blended. Stir in cranberries, walnuts, and orange zest. Drop teaspoonfuls of dough 2 inches apart onto the prepared baking sheets.",
      "Bake in the preheated oven until the edges are golden, 10 to 12 minutes.",
      "Remove from the oven and transfer to wire racks to cool.",
    ],
  },
  {
    favourite: true,
    id: 4,
    url: "https://i.ibb.co/vB4nsH2/Capture.png",
    name: "Lasagna Flatbread",
    details: "A simple lasagna pizza.",
    yield: "6 Servings",
    preptime: "25 minutes",
    cooktime: "15 minutes",
    totaltime: "40 minutes",
    ingredients: [
      { name: "Container ricotta cheese", quantity: "1 (15 ounce)" },
      {
        name: "Package shredded mozzarella cheese, divided",
        quantity: "1 (8 ounce)",
      },
      { name: "Package Parmesan cheese", quantity: "1 (3 ounce)" },
      { name: "Egg", quantity: "1" },
      { name: "Italian seasoning", quantity: "2 teaspoons" },
      { name: "Sausage", quantity: "1 pound" },
      { name: "Marinara sauce", quantity: "1/2 (26 ounce) jar" },
      { name: "Flatbreads", quantity: "6" },
    ],
    instructions: [
      "Preheat oven to 375 degrees F (190 degrees C).",
      "Combine ricotta cheese, 1/2 of the mozzarella cheese, Parmesan cheese, egg, and Italian seasoning in a bowl.",
      "Cook sausage in a skillet over medium heat until no longer pink, 5 to 10 minutes; drain. Stir in marinara sauce.",
      "Spread 1/6 of the cheese mixture evenly on each flatbread; cover with sausage mixture. Top with remaining mozzarella cheese.",
      "Bake in the preheated oven until cheese is melted and bubbly, 10 to 15 minutes.",
    ],
  },
  {
    favourite: true,
    id: 5,
    url: "https://i.ibb.co/rvTNb3G/image-1.jpg",
    name: "Snow Ice Cream",
    details:
      "This snow ice cream is very easy to make. I have fond memories of my mom making this for us when I was a child. Now I get to make it for my 3-year-old.",
    yield: "8 Servings",
    preptime: "20 minutes",
    cooktime: "-",
    totaltime: "20 minutes",
    ingredients: [
      { name: "Snow", quantity: "1 gallon" },
      {
        name: "White sugar",
        quantity: "1 cup",
      },
      { name: "Vanilla extract", quantity: "1 tablespoon" },
      { name: "Milk", quantity: "2 cups" },
    ],
    instructions: [
      "When it starts to snow, place a large, clean bowl outside to collect flakes.",
      "When the bowl is full, mix in sugar and vanilla. Stir in just enough milk for desired consistency. Serve at once.",
    ],
  },
  {
    favourite: true,
    id: 6,
    url: "https://i.ibb.co/RYb7mpn/um1a5vdg-rogan-josh-625x300-09-December-22.jpg",
    name: "Lamb Shank Roganjosh",
    details:
      "Rogan josh consists of pieces of lamb or mutton braised with a gravy flavoured with garlic, ginger and aromatic spices. This recipes uses lamb shanks, giving it a nice smoky flavour, while the Kashmiri red chillies give this dish its deep red colour.",
    yield: "6 Servings",
    preptime: "10 minutes",
    cooktime: "45 minutes",
    totaltime: "55 minutes",
    ingredients: [
      { name: "Vegetable Oil", quantity: "300 ml" },
      {
        name: "Bay Leaves",
        quantity: "3",
      },
      { name: "Black Cardamom Pods", quantity: "4" },
      { name: "Whole Cinnamon Sticks", quantity: "2 Medium" },
      { name: "Onions (finely sliced)", quantity: "1 kg" },
      { name: "Lamb Shanks", quantity: "6" },
      { name: "Ginger-Garlic Paste", quantity: "2 tablespoon" },
      { name: "Salt ", quantity: "to taste" },
      { name: "Kashmiri Chilli ", quantity: "2 tablespoon" },
      { name: "Red Chilli Powder", quantity: "1 tablespoon" },
      { name: "Turmeric Powder", quantity: "1/4 tablespoon" },
      { name: "Coriander Powder", quantity: "2 tablespoon" },
      { name: "Tomatoes (chopped)", quantity: "700 gms" },
      { name: "Garam Masala", quantity: "1 tablespoon" },
      { name: "Coriander Powder", quantity: "2 tablespoon" },
    ],
    instructions: [
      "Place a large, deep cooking pan over high heat and add vegetable oil, followed by bay leaf, cardamom, cloves and cinnamon for flavour. Then add the sliced onions and cook until brown.",
      "Now, add the ginger-garlic paste and cook for another few minutes. Add the salt and powdered spices except for the garam masala and cook uncovered for another 5 minutes.",
      "Add the chopped tomatoes and coriander roots and leave it on low heat. Take another pan and start to sear the lamb shanks on high heat from each side, as it will give them a good texture and most importantly, seal in the flavour and juice inside.",
      "Transfer the seared lamb shanks into sauce and cook on a low heat for 40 to 50 minutes, or until cooked.",
      "Add garam masala powder and cover the pan with a lid, but do not forget to check on regular intervals.",
      "Once the lamb shanks are cooked, remove them from sauce and keep them aside. Pass the sauce through a fine colander, and then pour it back over the lamb shanks.",
      "Serve hot, garnished with fresh coriander and ginger.",
    ],
  },
  {
    favourite: true,
    id: 7,
    url: "https://i.ibb.co/jWT2tk9/bekbl5vg-reshmi-chicken-paratha-roll-625x300-12-May-22.jpg",
    name: "Salami Roll Recipe",
    details:
      "Roll is a popular street food which can be prepared in different ways. Here we bring you one more stellar roll recipe that will compel you to make it time and again. It is called Salami Roll.",
    yield: "6 Servings",
    preptime: "10 minutes",
    cooktime: "15 minutes",
    totaltime: "25 minutes",
    ingredients: [
      { name: "Salami Slices", quantity: "6-7" },
      {
        name: "Tomato Slices",
        quantity: "6-7",
      },
      { name: "Onion Chopped", quantity: "1 medium" },
      { name: "Garlic chopped", quantity: "4-5 Cloves" },
      { name: "Mayonnaise", quantity: "2 teaspoons" },
      { name: "Green Chutney", quantity: "1 teaspoons" },
      { name: "Black Pepper", quantity: "1/2 teaspoons" },
      { name: "Salt", quantity: "1/2 teaspoons" },
      { name: "All Purpose Flour", quantity: "1/2 cup" },
      { name: "Whole Wheat Flour", quantity: "1 cup" },
      { name: "Oil", quantity: "As required" },
    ],
    instructions: [
      "Take wheat flour and all purpose flour in a vessel, add salt and knead soft dough and keep aside.",
      "Put a little oil in the pan and lightly fry the salami slices.",
      "Make parathas from the dough, cook it on the tawa and then spread mayonnaise on it.",
      "After this, place salami slices on it and put tomato, onion and lettuce on it.",
      "Sprinkle black pepper and salt on it, add green chutney and make a roll by placing it in foil. Enjoy it.",
    ],
  },
  {
    favourite: true,
    id: 8,
    url: "https://i.ibb.co/XkJ9pND/roast-chicken-620x330-71510568761.jpg",
    name: "Roast Chicken with jus lee",
    details:
      "This is a delicous recipe that non vegetarian Like. You need whole chicken, spices to bake it.",
    yield: "2 Servings",
    preptime: "10 minutes",
    cooktime: "45 minutes",
    totaltime: "55 minutes",
    ingredients: [
      { name: "Whole Chicken", quantity: "1" },
      {
        name: "Onion medium dice",
        quantity: "10",
      },
      { name: "Carrots, medium dice", quantity: "75" },
      { name: "Celery, medium dice", quantity: "75" },
      { name: "Garlic, Clove", quantity: "6-7" },
      { name: "Sprig Fresh Thyme", quantity: "1" },
      { name: "Salt", quantity: "To taste" },
      { name: "Black peppper", quantity: "To taste" },
      { name: "Cooking Oil", quantity: "50 ml" },
      { name: "Brine solution", quantity: "10 ml" },
      { name: "Water", quantity: "5ml" },
    ],
    instructions: [
      "Brine whole chicken overnight or 4 to 6 hours in the brine solution.",
      "Preheat oven to 230 degree c.",
      "Lay the mirepoix in the baking tray, drizzle some oil, add salt, pepper, garlic cloves, thyme sprigs and mix it well.",
      "Place the whole chicken over the bed of mirepoix and sprinkle paprika powder all over the chicken .",
      "To roast: bake the breast side for 20 minutes at 220 degree Celsius then leg side for 20 to 25 minutes 180 degree.",
      "Once the chicken is cooked rest it 5 to 10 minutes in order to prevent loss of moisture if cut.",
      "Blend the roasted mirepoix left in the baking tray with the some fresh cream.",
      "Season wtih some salt required and serve along the roasted chicken",
    ],
  },
  {
    favourite: true,
    id: 9,
    url: "https://i.ibb.co/ch6Rjzw/6e90dnh8-paneer-gujiya-generic-625x300-06-March-23.jpg",
    name: "Bhang Gujiya",
    details:
      "We can find many lavish dishes in Holi spread but gujiya is a classic recipe that made on this festival. Here we bring new version of bhang gujiya.",
    yield: "8 Servings",
    preptime: "20 minutes",
    cooktime: "1 minutes",
    totaltime: "21 minutes",
    ingredients: [
      { name: "All Purpose Flour", quantity: "4 cups" },
      {
        name: "Ghee",
        quantity: "1/2 cups",
      },
      { name: "Water", quantity: "1/4 cups" },
      { name: "Sugar", quantity: "1 cup" },
      { name: "Khoya", quantity: "200 gram" },
      { name: "Bhang Seed Powder", quantity: "1 tablespoon" },
      { name: "Almonds , chopped", quantity: "1 tablespoon" },
      { name: "Semolina", quantity: "1/4 cup" },
      { name: "Green Cardamom", quantity: "1/4 cup" },
    ],
    instructions: [
      "For making this easy and popular recipe, make the dough by mixing ghee and flour in a bowl. Add water and knead well to a soft dough. Once done, cover it with a wet muslin cloth and keep aside for 60 minutes.",
      "In the meantime, saute khoya and semolina till slightly golden in colour and keep aside to cool. Add sugar, bhang powder, green cardamom and almonds to the cooled khoya and mix well.",
      "Make balls of the dough and roll them into thick rounds. Place 1 1/2 tsp of the filling and fold. Seal the edges with wet fingers in the desired shape.",
      "Now, take a deep frying pan and add enough ghee to deep fry the gujiyas. Once the oil reaches smoking point, add gujiyas and deep fry on a medium flame. Fry the gujiyas till golden brown on all sides and serve hot.",
    ],
  },
  {
    favourite: true,
    id: 10,
    url: "https://i.ibb.co/VJxmZxd/ga7fr4r-salmon-625x300-18-January-23.jpg",
    name: "Grilled Norwegian Salmon",
    details:
      "Salmon fillet brushed with lemon juice, dijon mustard, kasundi mustard and olive olive, grilled to perfection. Garnish with lemon wedges and dill leaves.",
    yield: "1 Serving",
    preptime: "10 minutes",
    cooktime: "20 minutes",
    totaltime: "30 minutes",
    ingredients: [
      { name: "Fresh salmon fillet (Norwegian)", quantity: "150 gm" },
      {
        name: "Olive oil",
        quantity: "10 ml",
      },
      { name: "Garlic", quantity: "5 gm" },
      { name: "Leeks", quantity: "10 gm" },
      { name: "Celery", quantity: "10 gm" },
      { name: "Dijon mustard", quantity: "5 gm" },
      { name: "Lemon", quantity: "1" },
      { name: "Dill leaf", quantity: "5 gm" },
      { name: "Kasundi mustard", quantity: "5 gm" },
      { name: "Black quinoa", quantity: "40 gm" },
      { name: "Green zucchini", quantity: "15 gm" },
      { name: "Yellow zucchini", quantity: "15 gm" },
      { name: "Fresh kale", quantity: "10 gm" },
      { name: "Shallot", quantity: "8 gm" },
      { name: "Capers", quantity: "2 gm" },
      { name: "Tomato", quantity: "40 gm" },
    ],
    instructions: [
      "Whisk the olive oil, lemon juice, lemon zest, crushed pepper, dizon mustard, kasundi mustard in a small bowl. Brush the salmon fillet with this mixture.",
      "Place grill pan over medium high heat. Put the salmon fillet on the pan, cooked it’s for 5 to 6 minute per side or until the fish flakes easily with a fork.",
      "Bring a pan over high flame, sautéed- leek, celery, both diced zucchini, both quinoa, seasoned it and then bring out from heat.",
      "For sauce vierge, combine chopped tomato, dill leaves, capers, shallot, olive oil and seasoning.",
      "Start the plating with quinoa on the bottom put salmon over it and then topped with sauce vierge. Garnish with lemon wedges and dill leaves.",
    ],
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "Add":
      return [...state, action.data];
    case "Edit":
      return state.map((item) => {
        if (item.id === action.data.id) {
          return { ...action.data, id: action.data.id };
        } else {
          return item;
        }
      });
    case "Delete":
      return state.filter((item) => item.id !== action.id);
    case "Favourite":
      return state.map((item) => {
        if (item.id === action.id) {
          return { ...item, favourite: !item.favourite };
        } else {
          return item;
        }
      });
    default:
      return state;
  }
};
const RecipeProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [recipes, dispatch] = useReducer(reducer, initialRecipes);

  const handleNewRecipe = (recipe) => {
    dispatch({ type: "Add", data: recipe });
    toast.success("Recipe Added", {
      position: "bottom-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const handleEditRecipe = (recipe) => {
    dispatch({ type: "Edit", data: recipe });
  };
  const handleDelete = (recipe) => {
    dispatch({ type: "Delete", id: recipe.id });
    toast.success("Recipe Deleted Successfully", {
      position: "bottom-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const handleFavourite = (recipe) => {
    dispatch({ type: "Favourite", id: recipe.id });
    if (recipe.favourite === true) {
      toast.success("Recipe Added to Favourites", {
        position: "bottom-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.error("Recipe Removed from Favourites", {
        position: "bottom-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const signUp = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);
  const manageAccount = (fullname) =>
    updateProfile(auth.currentUser, {
      displayName: fullname,
    });
  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const logOut = () => signOut(auth);

  useEffect(() => {
    onAuthStateChanged(auth, (usr) => {
      if (usr) {
        setUser(usr);
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <RecipeContext.Provider
      value={{
        recipes,
        signUp,
        manageAccount,
        login,
        user,
        logOut,
        setUser,
        handleNewRecipe,
        handleFavourite,
        handleEditRecipe,
        handleDelete,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeProvider;
