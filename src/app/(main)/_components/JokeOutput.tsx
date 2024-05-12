
interface JokeOutputProps {
    data: string,
    loading: boolean
}

const JokeOutput = ({ data, loading }: JokeOutputProps) => {


    return (
        <p className="max-w-3xl text-center">
            {loading ? "Getting your joke..." : data}
        </p>
    )
}

export default JokeOutput