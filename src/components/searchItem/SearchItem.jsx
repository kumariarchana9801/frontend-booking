import Footer from "../footer/Footer";
import MailList from "../mailList/MailList";
import Navbar from "../navbar/Navbar";
import "./searchItem.css";
import { NavLink, useNavigate } from 'react-router-dom';

const SearchItem = () => {
  const navigate=useNavigate()
  return (
    <>
    <Navbar/>
    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
      <NavLink to='/hotels/:id'>Tower Street Apartments</NavLink>
        {/* <h1 className="siTitle">Tower Street Apartments</h1> */}
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$112</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton" onClick={()=>navigate('/hotels/:id')}>See availability</button>
          
        </div>
      </div>
    </div>
    <div className="searchItem">
      <img
       src="https://ik.imgkit.net/3vlqs5axxjf/external/http://images.ntmllc.com/v4/hotel/T57/T57772/T57772_EXT_Z9E8C1.JPG?tr=w-1200%2Cfo-auto"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
      <NavLink to='/hotels/:id'>Hyatt Pune</NavLink>
        {/* <h1 className="siTitle">Tower Street Apartments</h1> */}
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>5</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$112</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton" onClick={()=>navigate('/hotels/:id')}>See availability</button>
          
        </div>
      </div>
    </div>
    <div className="searchItem">
      <img
        src="https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/flyfish/raw/NH21086299972952/QS1042/QS1042-Q1/IMG-20240120-WA0002.jpg"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
      <NavLink to='/hotels/:id'>Hotel Spring Valley</NavLink>
        {/* <h1 className="siTitle">Tower Street Apartments</h1> */}
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>7</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$100</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton" onClick={()=>navigate('/hotels/:id')}>See availability</button>
          
        </div>
      </div>
    </div>
    <div className="searchItem">
      <img
        src="https://w7.pngwing.com/pngs/1019/999/png-transparent-citrus-hotels-bellandur-bangalore-outer-ring-road-ocean-drive-hotel-building-condominium-citrus.png"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
      <NavLink to='/hotels/:id'>Citrus Hotel</NavLink>
        {/* <h1 className="siTitle">Tower Street Apartments</h1> */}
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$98</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton" onClick={()=>navigate('/hotels/:id')}>See availability</button>
          
        </div>
      </div>
    </div>
    <div className="searchItem">
      <img
        src="https://www.itchotels.com/content/dam/itchotels/in/umbrella/fortune/hotel-listing/hotel-card-listing/Bangalore-Cosmos.png"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
      <NavLink to='/hotels/:id'>Tower Street </NavLink>
        {/* <h1 className="siTitle">Tower Street Apartments</h1> */}
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>4</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$100</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton" onClick={()=>navigate('/hotels/:id')}>See availability</button>
          
        </div>
      </div>
    </div>
    <div className="searchItem">
      <img
        src="https://www.freeiconspng.com/thumbs/hotel-png/hotel-png-10.png"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
      <NavLink to='/hotels/:id'>Tower Street Apartments</NavLink>
        {/* <h1 className="siTitle">Tower Street Apartments</h1> */}
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$116/night</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton" onClick={()=>navigate('/hotels/:id')}>See availability</button>
          
        </div>
      </div>
    </div>
    <MailList/>
    <Footer/>
    </>
  );
};

export default SearchItem;
