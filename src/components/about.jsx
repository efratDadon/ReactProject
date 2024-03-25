import React, { useState } from 'react';

export const About = () => {

    const [showDetails, setshowDetails] = useState(false);

    return (

        <>
            {showDetails ? (
                <div>

                    <p>בביוטי-קוסמטיק קיימים מוצרים המתאימים לכל סוגי וגווני העור
                        <br />
                        הצוות שלנו בביוטי-קוסמטיק מוקדש לספק שירות לקוחות יוצא דופן וייעוץ מומחה כדי לעזור לך למצוא את המוצרים המושלמים המתאימים להעדפותייך
                        <br />
                        אנחנו כאן כדי להדריך אותך בעולם היופי ולהפוך את חווית הקנייה שלך לחלקה ומהנה
                        <br />
                        אנו מציעים מגוון שירותים לך להגיע לתוצאה המושלמת, פגישת ייעוץ, טיפול וכן סדנת איפור מקצועית במיוחד שמתאימה בדיוק בשבילך
                        <br />
                        הצטרפו אלינו למסע הזה של ביטוי עצמי ושינוי. חקרו את מגוון מוצרי הקוסמטיקה היוקרתיים שלנו וגלה את אמנות האיפור עם ביוטי-קוסמטיק
                        <br />
                        כתובתינו: רחוב כהנמן 8 בני ברק
                        <br />
                        Beautycosmetics@gmail.com :מייל
                    </p>
                    <button onClick={() => setshowDetails(false)}>סגור</button>

                </div>
            ) : (
                <div>
                    <button onClick={() => setshowDetails(true)}>אודותינו</button>
                </div>
            )}

        </>
    )







}