import {FadeIn} from "@/components/FadeIn";
import {Button} from "@/components/Button";
import clsx from "clsx";
import {UseFormRegister} from "react-hook-form";
import TextInput from "@/components/Inputs/TextInput";
import RadioInput from "@/components/Inputs/RadioInput";

export function ContactForm({title,register, ...props} : React.ComponentPropsWithoutRef<'form'> & {title?: string, register: UseFormRegister<any>}) {
  return (
    <FadeIn className={clsx("lg:order-last", props.className)}>
      <form {...props}>
          <h2 className="font-display text-base font-semibold text-neutral-950">
            {title}
          </h2>
        <div className="isolate -space-y-px rounded-2xl bg-white/50">
          <TextInput label="Nom complet" autoComplete="name" {...register('name', {required: true})} />
          <TextInput
            label="Email"
            type="email"
            autoComplete="email"
            {...register('email', {required: true})}
          />
          <TextInput
            label="Entreprise"
            autoComplete="organization"
            {...register('company')}
          />
          <TextInput label="Téléphone" type="tel" autoComplete="tel" {...register('phone')} />
          <TextInput label="Message" {...register('message', {required: true})} />
          <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
            <fieldset>
              <legend className="text-base/6 text-neutral-500">Budget</legend>
              <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <RadioInput label="Moins de 800€" value="0-600" {...register('budget')} />
                <RadioInput label="800€ - 1500€" value="800-1500" {...register('budget')} />
                <RadioInput label="1500€ - 3500€" value="1500-3500" {...register('budget')} />
                <RadioInput label="Plus de 3500€" value="3500+" {...register('budget')} />
              </div>
            </fieldset>
          </div>
        </div>
        <Button type="submit" className="mt-10" invert>
          Envoyer la demande
        </Button>
      </form>
    </FadeIn>
  )
}
