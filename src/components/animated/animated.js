import React, { Suspense } from 'react';
import lazy from 'react-lazy-named';

const MotionDiv = lazy(() => import('framer-motion'), 'motion.div');

export const AnimatedDiv = props => (
  <Suspense fallback={<div className={props.className}>{props.children}</div>}>
    <MotionDiv {...props} />
  </Suspense>
);

const MotionA = lazy(() => import('framer-motion'), 'motion.a');

export const AnimatedA = props => (
  <Suspense
    fallback={
      <a className={props.className} href={props.href}>
        {props.children}
      </a>
    }
  >
    <MotionA {...props} />
  </Suspense>
);

const MotionLi = lazy(() => import('framer-motion'), 'motion.li');

export const AnimatedLi = props => (
  <Suspense fallback={<li className={props.className}>{props.children}</li>}>
    <MotionLi {...props} />
  </Suspense>
);

const MotionUl = lazy(() => import('framer-motion'), 'motion.ul');

export const AnimatedUl = props => (
  <Suspense fallback={<ul className={props.className}>{props.children}</ul>}>
    <MotionUl {...props} />
  </Suspense>
);

const MotionImg = lazy(()=> import('framer-motion'), 'motion.img');

export const AnimatedImg = props => (
    <Suspense fallback={<img src={""} alt={""} />}>
        <MotionImg {...props} draggable={false} />
    </Suspense>
)

const MotionP = lazy(()=> import('framer-motion'), 'motion.p');

export const AnimatedP = props => (
  <Suspense fallback={<p className={props.className}>{props.children}</p>}>
    <MotionP {...props} />
  </Suspense>
)