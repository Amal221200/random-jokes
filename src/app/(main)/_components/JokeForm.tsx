import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FormEvent, useCallback } from "react"

interface JokeFormProps {
    onSubmit: (input: string) => Promise<void>
}

const JokeForm = ({ onSubmit }: JokeFormProps) => {

    const handleSubmit = useCallback((e: FormEvent) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget as HTMLFormElement)
        onSubmit(formData.get("input")?.toString()!)
    }, [onSubmit])

    return (
        <form onSubmit={handleSubmit} className="flex gap-2 justify-center max-w-2xl mx-auto flex-col sm:flex-row">
            <Input placeholder="Enter a topic, ex: airplane, etc" name="input" required  />
            <Button type="submit">Generate</Button>
        </form>
    )
}

export default JokeForm