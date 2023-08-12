import React from "react";
import buildingimage from "../images/buildingimage.png";
import img1 from "../images/img1.jpg";
import "./about.css";
import Gallery from "./gallery";
import eminencevideo from "../videos/eminencevideo.mp4";

const About = () => {
  const galleryVideo = [eminencevideo];
  return (
    <>
      <div className="abt_page">
        <div>
          <p className="about_text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia,
            consequatur adipisci, repudiandae praesentium odio et veritatis est
            iusto officiis hic enim earum voluptatum iste eos sequi. Qui laborum
            quae ut minima cupiditate eius ipsa, magnam asperiores ex cumque.
            Harum eum tenetur et cumque laboriosam enim delectus commodi
            sapiente reiciendis esse quaerat veniam totam rerum dolorum omnis
            quod vitae, nobis consequuntur sunt at placeat! Repudiandae neque
            molestias autem quae quod, adipisci sit iusto. Quis, deleniti hic
            nisi unde porro asperiores ipsa eum quos accusantium commodi,
            doloribus quasi veniam repudiandae officia placeat? Inventore
            dolores voluptas a hic perspiciatis nulla doloribus excepturi eius
            placeat impedit! Optio quisquam odio nihil porro distinctio facilis
            animi accusamus blanditiis ad, dolorem quas nam, laborum at modi
            laudantium ipsam similique aliquam. Tenetur delectus tempore enim
            laudantium repudiandae, quod aliquam impedit, fugiat voluptatem
            eveniet harum itaque? Quo dolorem eos, modi optio officia doloremque
            nobis cumque! Voluptatibus id autem error eaque ipsam est expedita
            nesciunt. Impedit fugiat at sapiente ducimus dolorem quia iure
            labore incidunt, tenetur non vel eum quos quaerat porro totam atque
            perferendis. Deserunt error quos, laboriosam ratione soluta dolorum
            earum fuga vitae recusandae exercitationem ipsa quisquam provident
            quam nihil.
          </p>
        </div>
        <div>
          <img className="about_page" src={img1} />
          {galleryVideo.map((i) => (
            <div>
              <video autoPlay controls className="about_video" src={i} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
