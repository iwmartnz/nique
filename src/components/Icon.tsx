type IconProps = {
    size?: string;
    color?: string;
};

export const ArrowRightIcon = ({
    size = '24',
    color = 'currentColor',
}: IconProps) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M5.5 11.9999H21M21 11.9999L14 5M21 11.9999L14 18.9999'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
            />
        </svg>
    );
};

export const MenuIcon = ({
    size = '24',
    color = 'currentColor',
}: IconProps) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M3 6H21M3 12H21M3 18H21'
                stroke={color}
                strokeWidth='1.8'
                strokeLinecap='round'
            />
        </svg>
    );
};

export const ClockIcon = ({
    size = '24',
    color = 'currentColor',
}: IconProps) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M12 8V12L15 14M4 1L1 4M20 1L23 4M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z'
                stroke={color}
                strokeWidth='1.8'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
};

export const ShoppingCartIcon = ({
    size = '24',
    color = 'currentColor',
}: IconProps) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M1 1.00006L1.5 1V1C1.72586 1.00001 1.83878 1.00001 1.94018 1.00689C3.12785 1.08748 4.15552 1.86267 4.55926 2.98252C4.59373 3.07812 4.62476 3.1867 4.6868 3.40387L4.85714 4.00006M4.85714 4.00006L6.67378 10.3583C7.14917 12.0222 7.38687 12.8541 7.87213 13.4716C8.30044 14.0166 8.86305 14.441 9.50478 14.7031C10.2318 15.0001 11.0971 15.0001 12.8275 15.0001H15.1117C16.8624 15.0001 17.7377 15.0001 18.4706 14.6976C19.1174 14.4307 19.6829 13.9988 20.1106 13.445C20.5953 12.8175 20.8256 11.973 21.2862 10.284L21.3465 10.063C21.9086 8.00171 22.1897 6.97105 21.9513 6.15698C21.7425 5.44374 21.2763 4.8334 20.6432 4.44424C19.9205 4.00006 18.8522 4.00006 16.7156 4.00006H4.85714ZM12 20C12 21.1046 11.1046 22 10 22C8.89543 22 8 21.1046 8 20C8 18.8954 8.89543 18 10 18C11.1046 18 12 18.8954 12 20ZM20 20C20 21.1046 19.1046 22 18 22C16.8954 22 16 21.1046 16 20C16 18.8954 16.8954 18 18 18C19.1046 18 20 18.8954 20 20Z'
                stroke={color}
                strokeWidth='1.8'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
};

export const CalendarIcon = ({
    size = '24',
    color = 'currentColor',
}: IconProps) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M8 1V4M16 1V4M17.5 8H6.5M8 12.5C8 12.7761 7.77614 13 7.5 13C7.22386 13 7 12.7761 7 12.5M8 12.5C8 12.2239 7.77614 12 7.5 12C7.22386 12 7 12.2239 7 12.5M8 12.5H7M8 16.5C8 16.7761 7.77614 17 7.5 17C7.22386 17 7 16.7761 7 16.5M8 16.5C8 16.2239 7.77614 16 7.5 16C7.22386 16 7 16.2239 7 16.5M8 16.5H7M12.5 12.5C12.5 12.7761 12.2761 13 12 13C11.7239 13 11.5 12.7761 11.5 12.5M12.5 12.5C12.5 12.2239 12.2761 12 12 12C11.7239 12 11.5 12.2239 11.5 12.5M12.5 12.5H11.5M12.5 16.5C12.5 16.7761 12.2761 17 12 17C11.7239 17 11.5 16.7761 11.5 16.5M12.5 16.5C12.5 16.2239 12.2761 16 12 16C11.7239 16 11.5 16.2239 11.5 16.5M12.5 16.5H11.5M17 12.5C17 12.7761 16.7761 13 16.5 13C16.2239 13 16 12.7761 16 12.5M17 12.5C17 12.2239 16.7761 12 16.5 12C16.2239 12 16 12.2239 16 12.5M17 12.5H16M17 16.5C17 16.7761 16.7761 17 16.5 17C16.2239 17 16 16.7761 16 16.5M17 16.5C17 16.2239 16.7761 16 16.5 16C16.2239 16 16 16.2239 16 16.5M17 16.5H16M11.6 22H12.4C15.7603 22 17.4405 22 18.7239 21.346C19.8529 20.7708 20.7708 19.8529 21.346 18.7239C22 17.4405 22 15.7603 22 12.4V11.6C22 8.23969 22 6.55953 21.346 5.27606C20.7708 4.14708 19.8529 3.2292 18.7239 2.65396C17.4405 2 15.7603 2 12.4 2H11.6C8.23969 2 6.55953 2 5.27606 2.65396C4.14708 3.2292 3.2292 4.14708 2.65396 5.27606C2 6.55953 2 8.23969 2 11.6V12.4C2 15.7603 2 17.4405 2.65396 18.7239C3.2292 19.8529 4.14708 20.7708 5.27606 21.346C6.55953 22 8.23969 22 11.6 22Z'
                stroke={color}
                strokeWidth='1.8'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
};
