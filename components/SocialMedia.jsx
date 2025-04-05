import { RiLinkedinFill, RiGithubFill } from 'react-icons/ri'
import Link from 'next/link';

const icons = [
    {
        path: '/', // Add the correct URL here
        name: <RiLinkedinFill />,
    },
    {
        path: '/', // Add the correct URL here
        name: <RiGithubFill />,
    },
];

const SocialMedia = ({ containerStyles, iconsStyles }) => {
    return (
        <div className={containerStyles}>
            {icons.map((icon, index) => (
                <Link href={icon.path} key={index}>
                    <div className={iconsStyles}>
                        {icon.name}
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default SocialMedia;