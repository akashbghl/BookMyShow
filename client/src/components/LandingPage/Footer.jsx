import React from 'react';
import { Mail, CalendarCheck, CheckCircle, Contact } from 'lucide-react'; // optional icons

function Footer() {
    return (
        <footer className="bg-[#1c1c1c] text-gray-400 text-sm pt-6">
            {/* Top Bar */}
            <div className="flex items-center justify-around gap-4 px-4 py-3 ">
                <p className="text-white font-semibold">
                    🎭 List your Show
                    <span className="text-gray-300 ml-2">
                        Got a show, event, activity or a great experience? Partner with us & get listed on BookMyShow
                    </span>
                </p>
                <button className="px-4 py-2 rounded-md bg-[#f84464] text-white hover:bg-pink-600">
                    Contact today!
                </button>
            </div>

            {/* Icons Row */}
            <div className="flex flex-wrap justify-center gap-10 py-8  bg-[#2c2c2c]">
                <div className="flex flex-col items-center hover:text-white">
                    <CalendarCheck size={24} />
                    <span className="mt-2">24/7 Customer Care</span>
                </div>
                <div className="flex flex-col items-center hover:text-white">
                    <CheckCircle size={24} />
                    <span className="mt-2">Resend Booking Confirmation</span>
                </div>
                <div className="flex flex-col items-center hover:text-white">
                    <Mail size={24} />
                    <span className="mt-2">Subscribe to the Newsletter</span>
                </div>
            </div>

            {/* Links Grid */}
            <div className="grid grid-cols-2  w-[85%] m-auto gap-6 px-10 py-6">
                <div>
                    <h3 className="text-white font-medium mb-2">MOVIES NOW SHOWING IN ALIGARH</h3>
                    <p>Sitaare Zameen Par | Housefull 5 | Elio | 28 Years Later | How to Train Your Dragon</p>
                </div>
                <div>
                    <h3 className="text-white font-medium mb-2">UPCOMING MOVIES IN ALIGARH</h3>
                    <p>Vishnu Pai | Yoga with Acharya Prashant | X & Y | M3GAN 2.0 | Mr & Mrs 420 Again</p>
                </div>
                <div>
                    <h3 className="text-white font-medium mb-2">MOVIES BY GENRE</h3>
                    <p>Comedy | Thriller | Family | Adventure | Classic | Mystery | Political | Sports | War</p>
                </div>
                <div>
                    <h3 className="text-white font-medium mb-2">MOVIES BY LANGUAGE</h3>
                    <p>Hindi | English | Nepali | Konkani | French | Assamese | Khasi | Portuguese | Rajasthani</p>
                </div>
                <div>
                    <h3 className="text-white font-medium mb-2">SPORTS EVENTS IN ALIGARH</h3>
                    <p>Running | Chess | Cricket | MMA | Shooting | Wrestling</p>
                </div>
                <div>
                    <h3 className="text-white font-medium mb-2">EVENTS IN TOP CITIES</h3>
                    <p>Mumbai | Delhi-NCR | Chennai | Bengaluru | Hyderabad | Ahmedabad | Kolkata</p>
                </div>
                <div>
                    <h3 className="text-white font-medium mb-2">CINEMAS IN TOP CITIES</h3>
                    <p>Mumbai | Delhi-NCR | Chennai | Bengaluru | Pune | Kochi</p>
                </div>
                <div>
                    <h3 className="text-white font-medium mb-2">PLAYS / ACTIVITIES</h3>
                    <p>Plays in Mumbai, Hyderabad, Kolkata | Activities in Pune, Kochi, Chennai</p>
                </div>
                <div>
                    <h3 className="text-white font-medium mb-2">COUNTRIES</h3>
                    <p>Indonesia | Singapore | UAE | Sri Lanka | West Indies</p>
                </div>
                <div>
                    <h3 className="text-white font-medium mb-2">COUNTRIES</h3>
                    <p>Indonesia | Singapore | UAE | Sri Lanka | West Indies</p>
                </div>
            </div>

            {/* Bottom Spacing */}
            <div className="text-center text-xs text-gray-500 py-4 border-t border-gray-700">
                &copy; 2025 SnapMyEvent. Designed by Akash ✨
            </div>
        </footer>
    );
}

export default Footer;
