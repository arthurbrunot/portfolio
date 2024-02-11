"use client"

import {Container} from "@/components/Container";
import {Button} from "@/components/Button";
import {useState} from "react";
import {ContactForm} from "@/components/ContactForm";
import clsx from "clsx";
import {motion} from "framer-motion";
import {SubmitHandler, useForm} from "react-hook-form";
import {ContactFormData} from "@/app/api/send/route";

export default function Page() {
  const [isContactSectionVisible, setIsContactSectionVisible] = useState(false)

  const {handleSubmit, register} = useForm<ContactFormData>({
    defaultValues: {
      name: "John Doe",
      email: "johndoe@gmail.com",
      company: "Test",
      phone: "0676379184",
      message: "My message",
      budget: "3500+",
    }
  })

  const  onSubmit: SubmitHandler<ContactFormData> = async  (data) => {
    await fetch("api/send", {
      method: "POST",
      body: JSON.stringify(data),
    })
  }

  return (
    <>
      {
        !isContactSectionVisible && (
          <Container className={clsx("flex items-center h-full -mt-16", {
            "h-fit -mt-0": isContactSectionVisible,
          })}>
              <Hero
                isContactSectionVisible={isContactSectionVisible}
                title={"C'est pour bientôt !"}
                description={"Mon site est en construction, et il arrive bientôt ! Restez à l'écoute."}
                action={() => setIsContactSectionVisible(true)}
              />
          </Container>
        )
      }
      { isContactSectionVisible &&
        (
          <motion.div
            className="mt-16 grid lg:grid-cols-2 max-w-7xl mx-auto gap-24 px-8"
            initial={{opacity: 0, y: 24}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: 24}}
            transition={{duration: 0.25, ease: "easeOut"}
            }>
            <Hero
              isContactSectionVisible={isContactSectionVisible}
              title={"On discute de votre projet ?"}
              description={"Je suis toujours à la recherche de nouveaux projets. Parlons ensemble du vôtre."}
              className={"!items-start !text-left text-balance"}
              action={() => setIsContactSectionVisible(false)}
            />
            <motion.div layout className="flex gap-x-8 gap-y-24">
              <ContactForm className={"bg-white mt-0 w-full"} onSubmit={handleSubmit(onSubmit)} register={register}/>
            </motion.div>
          </motion.div>
        )
      }
    </>
  )
}

function Hero(props : HeroProps) {
  return (
    <motion.div
      className={clsx("flex max-w-2xl flex-col text-center items-center", props.className)}
      initial={{opacity: 0, y: 24}}
      animate={{opacity: 1, y: 0}}
      exit={{opacity: 0, y: 24}}
      transition={{duration: 0.25, ease: "easeOut"}}
    >
      <h1 className={clsx("mt-4 text-3xl lg:text-7xl font-semibold text-neutral-950", {
        "!text-5xl": props.isContactSectionVisible,
      })}>
        {props.title}
      </h1>
      <p className="mt-2 text-sm text-neutral-600">
        {props.description}
      </p>
      <Button invert={!props.isContactSectionVisible} className="mt-6 w-fit" onClick={props.action}>
        {props.isContactSectionVisible ? "Retour" : "Contactez-moi"}
      </Button>
    </motion.div>
  )
}

interface HeroProps {
  isContactSectionVisible: boolean
  className?: string
  title: string
  description: string
  action: (event: React.MouseEvent<HTMLButtonElement>) => void,
}
