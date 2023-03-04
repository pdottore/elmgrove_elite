import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
    {
        name: "Weight Training Classes",
        description: "Fun, functional and always fresh, this workout helps tone and fine-tune major muscle groups to ignite total-body strength and coordination.",
        image: image1,
    },
    {
        name: "Yoga Classes",
        description: "With an emphasis on safe and effective movement, deep breathing and meditation, Elmgrove Elite Yoga practices yoga to promote both physical and mental well-being.",
        image: image2,
    },
    {
        name: "Ab Core Classes",
        description: "This class will concentrate on strengthening your core muscles. Including your abdominal muscles, back muscles and the muscles around the pelvis. ",
        image: image3,
    },
    {
        name: "Agility Classes",
        description: "Improve power and agility, as well as build core muscle strength. Functional movements will help support the physical demands of life and a core focus will improve posture, balance, stability, and coordination.",
        image: image4,
    },
    {
        name: "SWEAT Classes",
        description: "Get ready to SWEAT, the cardio exercises and work-rest periods vary from class to class but the intensity always pushes you to give your best that day!",
        image: image5,
    },
    {
        name: "Zumba Classes",
        description: "Through both low and high intensity movements, you’ll be dancing your way through this calorie burning dance workout. Great if your goal is weight loss or general fitness. ",
        image: image6,
    },
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const ourClasses = ({ setSelectedPage }: Props) => {
  return ( <section id="ourclasses" className="w-full bg-primary-100 py-40">
    <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
    >
        <motion.div
            className="mx-auto w-5/6"
            initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x:-50},
                    visible: { opacity: 1, x: 0},
                }}
        >
            <div className="md:w-3/5">
                <HText>OUR CLASSES</HText>
                <p className="py-5 ">
                    Personal Trainers build workouts that feel easy as they are custom fit to you! They help create a personalized fitness plan just for you.
                    Our expert personal trainers will analyze your current state, map out a course for the future and help you stick to it.
                </p>
            </div>
        </motion.div>
        <div className="mt-10 h-[350px] w-full overflow-x-auto overflow-y-hidden">
                <ul className="w-[2800px] whitespace-nowrap">
                    {classes.map((item: ClassType, index) => (
                        <Class 
                            key={`${item.name}-${index}}`}
                            name={item.name}
                            description={item.description}
                            image={item.image}
                        />
                    ))}
                </ul>
        </div>
    </motion.div>
  </section>
  );
};

export default ourClasses;