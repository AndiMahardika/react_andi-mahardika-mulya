import { useState } from "react";
import Logo from "../../assets/logo.png";
import Button from "../button/button.jsx";

export default function Hero(props) {
  // eslint-disable-next-line react/prop-types
  const { article } = props
  const [language, setLanguage] = useState("en")

  const handleChangeText = () => {
    setLanguage(language === "en" ? "id" : "en")
  }

  return (
    <>
      <div className="row pt-5">
        <div className="col-lg-9 py-5 text-center mx-auto">
          <img src={Logo} alt="logo" className="img-thumbnail" width="80" />
          <h2 className="mt-4 mb-2">{ language === "id" ? article.title.id : article.title.en }</h2>
          <p>{ language === "id" ? article.description.id : article.description.en }</p>
          <Button type="button" color="primary" onClick={handleChangeText}>change text</Button>
        </div>
      </div>
    </>
  );
}
