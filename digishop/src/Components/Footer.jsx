import "./Footer.css";
import { AiFillYoutube, AiOutlineTwitter } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { CgFacebook } from "react-icons/cg";
import reseller from "../Utils/reseler.png";
import trustpilot from "../Utils/trustpilot.png";
import tictok from "../Utils/tictok.png";

const copanypng= "https://content1.geekbuying.com/V1.4/en/images/index_images/footicons.jpg?v=2022042"
export const Footer = () => {
   
    

    return (
        <div id="footer">
            
            <div id="subscribeFooter">
                <input type="text" placeholder="Enter email to get a 5% off coupon"/>
                <button>Subscribe</button>
            </div>
            <div id="manifooterContentDiv">
                <div id="manifooterContent">
                    <div id="footerHelp">
                        <h3>Help</h3>
                        <p>Order status</p>
                        <p>About us</p>
                        <p>Contact us</p>
                        <p>Warranty</p>
                        <p>FAQs</p>
                        <p>Sitemap</p>
                    </div>
                    <div id="footerSupport">
                        <h3>Support</h3>
                        <p>Payment information</p>
                        <p>Shipping guide</p>
                        <p> Wholesale</p>
                        <p>Drop shipping</p>
                        <p>Blog</p>
                        <p>Affiliates</p>
                    </div>
                    <div id="footerPolicies">
                        <h3>Policies</h3>                      
                        <p>Terms & conditions</p>
                        <p> Return policy</p>
                        <p> Privacy</p>
                        <p> Declaration</p>
                        <p>Customs</p>
                    </div>
                    <div id="footerApp">
                        <h3>Download The App</h3>
                        <div id="appDIv">
                            <div id="leftApp"><img src="https://content1.geekbuying.com/V1.4/en/images/index_images/android_app.png" alt="" /></div>
                            <div id="rightApp">
                                <div><img src="https://content1.geekbuying.com/V1.4/en/images/index_images/app_store.jpg" alt="" /></div>
                                <div><img src="https://content1.geekbuying.com/V1.4/en/images/index_images/google_play.jpg" alt="" /></div>
                                <div><img src="https://content1.geekbuying.com/V1.4/en/images/index_images/gallery.jpg" alt="" /></div>
                            </div>
                        </div>
                        <h3>Connect with us</h3>
                        <div id="socialDiv">
                            <div><CgFacebook/></div>
                            <div><AiFillYoutube/></div>
                            <div><FaTelegramPlane/></div>
                            <div><TiSocialInstagram/></div>
                            <div><AiOutlineTwitter/></div>
                            <div><img src={tictok} alt="" /></div>
                        </div>
                    </div>
                    {/* <div id="footerRaiseTicket">
                        <div> Service_payment@geekbuying.com</div>
                        <div>Ticket</div>
                        <div>Live Chat</div>
                    </div> */}
                </div>
                <div id="manifooterContentPolpular">
                    <h3>Popular Searches</h3>
                    <div id="popularItems">
                        <div>DigiShop Coupon</div>
                        <div>Roborock Q7 Max</div>
                        <div>Tronsmart Bluetooth Speakers</div>
                        <div>Windows Mini PC</div>
                        <div>ENGWE X26</div>
                        <div>android tv boxes</div>
                        <div>KugooKirin G2 Pro</div>
                       
                    </div>
                </div>
                <div id="manifooterContentLanguage">
                    <div>English</div>
                    <div>Español</div>
                    <div>Français</div>
                    <div>Deutsch</div>
                    <div>Italiano</div>
                    <div>Português</div>
                    <div>Nederlands</div>
                    <div>Polski</div>
                    <div>Русский</div>
                    <div>Türkçe</div>
                    <div>ελληνικά</div>
                    <div>Magyar</div>
                    <div>עברית</div>
                    <div>لعربية</div>
                    <div>ไทย</div>
                    <div>日本語</div>
                </div>
            </div>
            <div id="companyFooterDiv">
                <div id="companyFooter">
                    <img src={copanypng} alt="" id="companyImg"/>
                    <img src={reseller} alt="" id="resellerImg"/>
                    <img src={trustpilot} alt="" id="trustpilotImg"/>
                </div>
                <div id="footerCopyRight">
                    <p>Copyright © 2012-2022 GeekBuying.com. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}