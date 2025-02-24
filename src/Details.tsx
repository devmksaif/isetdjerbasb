import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Details() {
    const Members: number = 140;
    const ChaptersNum: number = 3;
    const awardsNum: number = 2;
    const participationsNum: number = 8;
    const [incremented, setIncremented] = useState<number>(0);
    const [chapters, setChapters] = useState<number>(0);
    const [awards, setAwards] = useState<number>(0);
    const [participations, setParticipations] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIncremented(prev => (prev < Members ? prev + 1 : Members));
            setChapters(prev => (prev < ChaptersNum ? prev + 1 : ChaptersNum));
            setAwards(prev => (prev < awardsNum ? prev + 1 : awardsNum));
            setParticipations(prev => (prev < participationsNum ? prev + 1 : participationsNum));
        }, 5);

        // Clear interval if all values have reached their targets
        if (incremented === Members && chapters === ChaptersNum && awards === awardsNum && participations === participationsNum) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [incremented, chapters, awards, participations]);

    // Animation variants for Framer Motion
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3, // Stagger the animation of children
                delayChildren: 0.2, // Delay before children animations start
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <div className="flex flex-col items-center justify-center   bg-gradient-to-r from-blue-50 to-indigo-50 py-10">
            <motion.div
                className="text-center mb-10"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-5xl font-bold text-[#00629B]">Our Achievements</h1>
                <p className="text-xl text-gray-600 mt-4">Celebrating our journey and milestones</p>
            </motion.div>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
               
                <motion.div
                    className="bg-white rounded-2xl shadow-2xl p-6 transform transition-transform duration-300 hover:scale-105"
                    variants={cardVariants}
                >
                    <div className="flex flex-col items-center">
                        <img src="data:image/png;base64,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" alt="conference-call" className="w-16 h-16 mb-4" />
                        <h2 className="text-2xl font-bold text-[#00629B]">Members</h2>
                        <p className="text-4xl font-semibold text-gray-800">{incremented}+</p>
                    </div>
                </motion.div>

          
                <motion.div
                    className="bg-white rounded-2xl shadow-2xl p-6 transform transition-transform duration-300 hover:scale-105"
                    variants={cardVariants}
                >
                    <div className="flex flex-col items-center">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAIIUlEQVR4nO2caYwVRRDH/wsL6AJGEKLrrlEjEi8UJCYeEeIHDxQFT+SDJKKAysYAK8YEFUk0HmA0agKKGi/8oqggIh4B4wF4QJSoQIIusC5e3LsoIu6YMvXMWHbP656eHva917+kk903Xd3TVW+6q6p7HhAIBAKBQCAQCAQCgUAgEAgEAoFAIBBQ0RvADQAWAlgHoI3LOv6MrvWqYNX1zks/1QAaAewAEBUpVGcKy1QK1XnqpwbAWwYdyfIegJ4of2ry1E8nAEtSdFYoS7iNcqVT3vppVDTyE39+In87avjv2wD8rKg/GeVLY5766QFgmxBeyQuXjsMAfCpktgLojvKjR976maAQPMJArpbrxmXHofyYkLd+5guh6RY3e4+QfQXlx/y89dMkhE6z6HCQkP0e5UdT3vrZI4RocTKlRshSW+XGnrz1s9Ohwx5CthXlx5689bNCCA206LASp6yBWevnAgBPA1gF4Du2WlyIFiJTZmSwqF8C4AeHoEtXmgEMgzuv+tIP+cbvGgxkK7tsxahV+Odp3N5mD8YolM1wZ7wP/VDmcYPFQPIMDCPPpUMGhi+nGAilBqYCOJkb6s5/T9WkBialHHDkuQyHO1Oy1M8JANoVGcgLeYG6MoNBU/KsKiOD2HCH4f19AmAoDmxy8V/93CcurhI5+rGOxljkmMOKUhpkMID9KRRDcmnonjL9/j/9fCgq3BS7dhCAL8X19wF8bbgBMznFBkxXAA08D7c5GORFIfcLL5rkWc0D8JfmvtvZ26GZw5Zqnr52uOhns6h4LoDjAIxUxCBUzuBHlNzR5wGs5+CI3OO1AN4AcH3KLcojAawuMhBT5LiGiOsDACxI6IeermcBHJ1iHL1YBwtYJ602+tln8XhRIs0XXQ2Msdeivd2GEfRZAJYm9PkHgMcAHI6c0D26sqwt4sq50mBwDzaB5QZLb+p8AJ8l9N3G6+2h8MxHBop4TTxidFO38OdNPGW1sRJe53XI1ngrRZ8LeQrrB2AiF5s80WzR3k5eQzonyJCncwWAbyxmDdPyO4A1AF4CcCmALrqboEfxUZ4uConEfbw20KDOjNU9GMD9inSKqlCdByyU2Crk6+DGAM10vIZd+iTIaGMUeaosy3rX1E1/nrZsOyaZU1LM+XVwZ1LCfb3DRiu2rtGT+aNHw8xIE6MN0ESXpoXSAqdaTllvslH68frSYDllFRiT8ESTJzXXIPdUw0GmryfmXpsB6fJcG2OpgRoObshwtwPYpKjfwjkcHRMNbpwyq8XiljZ21yfyNaIewHMJDkwbb736PITRkz26x9lzk7HPxaYNzVUMYDavJzoooHxCIUc5Mx1dOUtg4/YWi1tWiW//IA4QdfVbODPh+wzZQMWWwtoiDsc/nKRIPzxs0fGDim9C0rxdC+CLIkaxiVsibi/u0ew1kPmK3WDfRpFPCgXjicwUAqstUyGdFWnmp4rIdAFwMyf8VHO/TdxSKNReAXktaW1czFOyL+QsQpkBq/TD5Yo6I7heE/8tGS7aoA0nGyKNQXRxSx07BPFryxPaO4QDvt80RtnP6Y5ZAG7lMdLU1wfunC36ohyhlmMV83c3Rb0tsTp/Ahil+MbLbzq17WqQ1gQ3uV5c223Q3lEAXrDIXEQcEH/LWWJaa+9mr+48zgeq9CUdpnh725Mqy282BY0mT5HKKB84bApFhoXc4wL9LOQklH5fZiGfVNr5W3+RZmzVCt1Z7YKpEmwjuKEkozwprlPbpkSGhdaUNOuLjsv4BZssDENxmLNB5iga1ilyVBGjSONS26ZEhoXijiwNUnBKKHV0HYBpfN+L+Vtvkj6Kzy7VrgZRpaS3ianB1Chy+qO2TYmKlL2cBY5H8TUcRJq4uC70UUxRFGt9zM4LOQS7eF2Bq0FaNAOgs1rHWBrlLvEZtW1KlKECs26vs2hrv+K6i/x/wnx58CFeaCE/3sIo7Yr/6fhMuRskM/nTDR71LQlBk8ooWRUXupWqQa4VFRfzwQA5mF85SMrTKH0tBx2/n42lapDpouJMFn5Gc3oivonl2ygrUpxkuTNh6nWhk2iPgkovBpmnOXNaxenjSBEJy1MdBUYqgkfXMsFi0EM16+HmhICtwxnkc1FRnup7SJNGoJPzWVOnyE1R4tGUZZqcVxbkZpBdomKtwftxEfv9tIGfNfWiH7o/U9o8bA3napBai8FPVRiFDhZcg2ypL1ODGMkPFZVo+kqiQTFHU8OP8MGIortgBsZYJNqnSNiUpZq9+pIxyDhRiRb4YoxNcbDZpYy3GPQQzaKexRtUuRhkZsr3rkcrtiR9lOUpnrppHdTtNZJfKCpRkGjKOfziok+D9EU6rtYc4+nwBpF7AJRGsYEOH9wI4G1Or2Q9lXWk1Il3g1SL45ftGf/WlUxa7ks648pkqUCUmkH6iwp0dihr4nvwUULWuEBFG8RlI8kUub9OL/4kEXkuHdogjYoTillju78eVbJB5jgcRjDFdn+92aMxXN3eKtFee9bySz28w+06LQ7zZJQssr3eDdJiueCmIQ/HIS+8GiSNS5oG36512RhksOJ4vC/WOwafFWGQ0eIivWPtC5f0TMUYRLWP7otZoi86pFyKeDWIbh/dB/I3puhV4VLEq0Hkm0u6QwtZYLsJVpEGkT+YYvKraGmR28TUd6ki45vM5OMvIdJbtL7Z5PBWVUeiyfFHPrXyV/Hp9u38boRvRnBfW/lH0kqVQiahOWXknyjveiAhDQeiz0AgEAgEAoFAIBAIBAKBQCAQCAQCgUAgQPwNZGy/aguUl54AAAAASUVORK5CYII=" alt="student-activity" className="w-16 h-16 mb-4" />
                        <h2 className="text-2xl font-bold text-[#00629B]">Chapters</h2>
                        <p className="text-4xl font-semibold text-gray-800">{chapters}</p>
                    </div>
                </motion.div>

                 
                <motion.div
                    className="bg-white rounded-2xl shadow-2xl p-6 transform transition-transform duration-300 hover:scale-105"
                    variants={cardVariants}
                >
                    <div className="flex flex-col items-center">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAHp0lEQVR4nO2de4hVRRzHv7uptWr2WHcLjbIHWGuU2h+WBeailT2kNYWKNQwJIv8Q2qR8pvayB/SUAqGHFWmRmrI9icLWirIHrZaQFlmJkqu91kepNwa+B35Mc+6dc/fu3Tnn/j4woOfOOWdmvuec+c1vfjMLKIqiKIqiKIpNPYB5ANYyzQVQ979cSlloBLAHQM5KHfxNKRG9AEwEsBDAfABjAVRbecYD2CdE+I4p+v8+5pFU81rmmosAXMN7KXkYZjVslLYBmAWg1hLjHwDN4vxmHpOi1PLcbY7rfgugQRVxMxDADtFY/zoacD9TJEaT4zpNQhSZX6ZD4t+/UDTFYolopHsA9GVDzQCwyWrQODFcokRpE69Vy2vfK34z91YEvQHsYuO0xbTMGAArAXQWEEOK0slzzLku2njPXSyDQiaJp7W5QKvUJGi1QnmbxX1NGRTyJhvld35OykWNMJ1bK02NKgDTAXwR09HmACztgXItjSmLKeNGADez7JnCVOiFmIrLNNLzesMBnGwdM+c+w9F7EkZ4lOu5rIkyXVRuO4AnaNnINMfzWmYUfgTAN9bxVofFVE3Lyjzl+ZjjKI8p48+i3NOQITYKMU5McN4ZABYDON56ojsd3/zLALwF4HxxrIH3PVLkWOMEIcpnyBBRn/FowvNe53kPWcdrPT8hfQCsAPCkdbwfgEGeZXhM9CmZIXrtjX8qCZMBfAXgkhKWxYw3dgLYDWCwR/6FovwVJchxAO6kP6s7Mff5FcDfAE7yyF+xgtzOPBvKUJ7BCayxzAjSm6PfVk9BGmg53YLycx6ARyzjwSVIK+vUO21e2yX8Ttv2fAvC5N08D0yLox47WcfgvcTDLBe6SXs5GjbmqsRYSVeVoc/w4ToAH3LA6WIE67DXqptx3Z+DQOnFCZ+osMaTOjWPg2+8qFRaqGGd2iy3fpAzjxOt+QyfQd8OulRC42iPPPeJ+po3PTgWidk4X49tiP6hCzlGWVYgnxlcHmadzTx9cMzvopsiFG5kPT71MF6iN8TXD1dWxooCGodeHBez0iFzrcdDNUPU91IEiPGsbhUdXZxvKZrrtq2utBHN8291hCkFwyzx1LjmsY8C8BqAj+hJTStjRD1NnYNloPDsmuCCNDMIwCoAMx2/rRQeYFPnYBkvBOlMGJAQGjewHmY+RFLDukWC2BGSwWBHFLpCdYIcQOXp7x7mxFe+uC9X2GoQFlYhMUYD+A3A48gGTZYopg2CoF6E0uSLKJxWIBAu7aJ0hNKfzPMMcjOj8imhFDoBDQU8CjLYbjYCYC0LY6LWs8Y81m1BgXxRxP4aBMAbLMwWZI8FrJsRJh9bmG81AmCu5yermotkfAILQqHKY/3IVFH/uxAAdezQKr1T3x2SU7XRw+w1bu2/aNtngaZQzd6sDgwHcI7nijQODLPoOrk+Zoo5Na6TrDkXawG8HTO3kxrnYiH3u+EVAJ+r+737qRZLj9tj8vQVb1BcyE1aCH6CqlG8HbcVyDcp0AAHsFyXe0THyync4CwsOao9knANSKhBDp+kPcghK2FAoxgZ/1Taw4CKCZQzfc6rSGeg3P2ivlciJaGkzXnGIuOYz6zVSAvHcr3iBlHPdgZvBEkDB1I+wdbRCinzpvQ0kwF8HONIrObD86IYEObEfPvZSMGAaonYKiMNyxHey7McYYWjHiYm+YG0GS9JF+wM54DxVpSfc9nAriVu61j2gxzUTgj5E+WLjyAtzGOC6FCGdYane+aNBDEPS2bwEaQGwN1l2FCsD+dvTN92ikf+ihUkrrNt51xKKS2ln7jRjc+GmSqIYBWFfNDRqOZJL8QxXBD0tOVvqotZ4FkxgkTb9ZmOMwlD6JKRS5iN+fwHgHesvBNoLQ0Vx4aJt7PY4O4PMjj1jO/FU9ZVz2gj/WXtHpvPROvfTSBCMdRx2tlc91lkiMXiSV3HKdBxVrogwfVGc4rVXmtu9jQ5tYjyneUozxSxaU6OxzJDfwBfOwZYMh1IYIqWEuMI/aFA2V5CBjGd6POO3UJlerkHyiV3J7XTfkbJpGrnhmIGZReJT8Ny0QCHPXaVK+UmmEM5Ao/uv1yUaxStuYpD7iWSA/B+mbaJrRI+rGLHSRUhSI6L8vtxVq47NlLuZ81nqCAxgvxofb66a6vxwzH31DfEEmQIgC+7sBn/1ISb8Zsta09TQeI/WdG33TTkHQn/XEW0JECKIanmpgUtHCyOE3P6+oaUYMe2sSLqXqbdRYTlqCAlEATs9Gdz5dIars8oZkmAChLYnoY57dRVkGDRNyQwVJDAUEECQwUJDBUkMFSQwFBBMijIUCvaJCk6MCyRICM5y3eILvV1DIBQQcooSBU9tVEAmyu1MWrENyha35AiBOnD/VI2O6JVljEdsH7bzHMKRTmqIAkE6c+dQbdbjf0ntwuUuwvV83odjj8vsTBP+KgK4iFIPX/bk7BxfUS0o95VkDyCnMlGkzOCOYajzmQAtS8mnuomR5DEQRoD0dIHFSRGkNWO4Ib1AK7u4hLqKl5jvSPYwdxTBYkRJCcaqlgTNomprGFABQQ5yMYqx58Rcn0aNQyIjeCymMqFtMxUEC6qsZcW9AQDAvkDZYqiKIqiIAP8B34rfuwzMjztAAAAAElFTkSuQmCC" alt="prize" className="w-16 h-16 mb-4" />
                        <h2 className="text-2xl font-bold text-[#00629B]">Awards</h2>
                        <p className="text-4xl font-semibold text-gray-800">{awards}</p>
                    </div>
                </motion.div>

         
                <motion.div
                    className="bg-white rounded-2xl shadow-2xl p-6 transform transition-transform duration-300 hover:scale-105"
                    variants={cardVariants}
                >
                    <div className="flex flex-col items-center">
                        <img src="data:image/png;base64,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" alt="external-collaborate-corporate-social-responsibility-outline-geotatah-2" className="w-16 h-16 mb-4" />
                        <h2 className="text-2xl font-bold text-[#00629B]">Participations</h2>
                        <p className="text-4xl font-semibold text-gray-800">{participations}</p>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}