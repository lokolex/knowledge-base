import React from 'react';
import clsx from 'clsx';

interface ICardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = (props: ICardProps) => {
  const { children, className } = props;
  return <div className={clsx('shadow-card', className)}>{children}</div>;
};

export default Card;
