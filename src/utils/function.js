import axios from "axios";

export const singleSlugData = async (slug) => {
    try {
      const res = await axios.get(
        `https://irepute.in/wp-json/wp/v2/pages/?slug=${slug}`
      );
      return res.data;
    } catch (error) {
      console.log("error: ", error);
    }
  };

  // export const menuList = async () => {
  //   try {
  //     const res = await axios.get(
  //       `https://irepute.in/wp-json/wp/v2/top-nav`
  //     );
  //     return res.data;
  //   } catch (error) {
  //     console.log("error: ", error);
  //   }
  // };




  export const gallerySlugData = async (slug) => {
    try {
      const res = await axios.get(
        `https://irepute.in/wp-json/wp/v2/pages/?slug=${'portfolio-gallery-list'}`
      );
      console.log("✌️res --->", res);
  
      const html = res.data[0]?.content?.rendered;
console.log('✌️html --->', html);
      var parser = new DOMParser();
      var doc = parser.parseFromString(html, "text/html");
      const h2 = doc.querySelectorAll("h2");
      const h2Tiles = [];
      for (let i = 0; i < h2.length; i++) {
        h2Tiles.push(h2[i].innerText);
      }
  
      //console.log(doc)
      const categories = [];
console.log('✌️categories --->', categories);
  
      const categoryElements = doc.querySelectorAll(".get-div-content");
  
      categoryElements.forEach((categoryElement) => {
        const category = {
          name: categoryElement.querySelector("h2").innerText,
          images: [],
        };
        const imageElements =
          categoryElement.querySelectorAll(".attachment-full");
        imageElements.forEach((imageElement) => {
          category.images.push({
            src: imageElement.getAttribute("src"),
            alt: imageElement.getAttribute("alt"),
          });
        });
        categories.push(category);
      });
      return categories;
    } catch (error) {
      console.log("error: ", error);
    }
  };
  