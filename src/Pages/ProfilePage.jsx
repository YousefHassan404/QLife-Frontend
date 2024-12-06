import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { UserContext } from "../../Utils/Providers/Context/UserContext";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import Signin from "../Components/Signin/Signin";
// import Profile from "../Components/Profile/Profile";
import Profile from "../Components/Profile/Proile";

export default function ProfilePage() {
    const { user } = useContext(UserContext);
    const { id } = useParams();
    console.log(id)
    return (
        <>
            <Header />
            <main>
                <section className="profile-page-section">
                    <div className="container">
                        {user ? (
                            <Profile data={user} />
                        ) : (
                            <Signin />
                        )}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
