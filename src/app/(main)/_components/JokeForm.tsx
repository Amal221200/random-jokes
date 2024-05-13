import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FormEvent, useCallback } from "react"

interface JokeFormProps {
    onSubmit: (input: string) => Promise<void>,
    isLoading: boolean
}

const JokeForm = ({ onSubmit, isLoading }: JokeFormProps) => {

    const handleSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget as HTMLFormElement)
        await onSubmit(formData.get("input")?.toString()!)
    }, [onSubmit])

    return (
        <form onSubmit={handleSubmit} className="mx-auto flex flex-col justify-center gap-2 sm:flex-row">
            <Input placeholder="Enter a topic, ex: airplane, etc"
                disabled={isLoading} className="disabled:cursor-not-allowed disabled:opacity-80" name="input" required />
            <Button disabled={isLoading} type="submit" className="disabled:cursor-not-allowed disabled:opacity-80">Generate</Button>
        </form>
    )
}

export default JokeForm