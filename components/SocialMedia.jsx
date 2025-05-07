import { RiLinkedinFill, RiGithubFill } from 'react-icons/ri'
import Link from 'next/link';

const icons = [
    {
        path: 'https://www.linkedin.com/in/joanatrinidad/', 
        name: <RiLinkedinFill />,
    },
    {
        path: 'https://github.com/joanatrinidad', 
        name: <RiGithubFill />,
    },
];

const SocialMedia = ({ containerStyles, iconsStyles }) => {
    return (
        <div className={containerStyles}>
                  {icons.map((icon, index) => (
                <Link href={icon.path} key={index} target="_blank" rel="noopener noreferrer">
                    <div className={iconsStyles}>
                        {icon.name}
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default SocialMedia;