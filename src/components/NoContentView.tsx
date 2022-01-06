import { BoxProps } from "@material-ui/core/Box"
import { FlexRowCenter } from '~/components'
interface Props extends BoxProps {
    message: string | JSX.Element | React.ReactElement;
}

export const NoContentView: React.FC<Props> = ({ message, ...rest }) => {
    return <FlexRowCenter minHeight="500px" {...rest} >
        {message}
    </FlexRowCenter>
}