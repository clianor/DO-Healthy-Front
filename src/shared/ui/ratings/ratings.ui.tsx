import * as React from 'react';

import { cn } from '@/shared/utils';

type RatingsProps = React.ComponentProps<'div'> & {
  rating: number;
  totalStars?: number;
};

export function Ratings({ rating, totalStars = 5, className, ...props }: RatingsProps) {
  return (
    <div className={cn('flex items-center gap-1', className)} {...props}>
      <div className="flex items-center">
        {Array.from({ length: totalStars }).map((_, index) => {
          const isHalf = rating - index === 0.5;
          if (rating < index) return <EmptyStarIcon key={index} />;
          if (isHalf) return <HalfStarIcon key={index} />;
          return <StarIcon key={index} />;
        })}
      </div>
      <span className="text-sm text-typography-subtle sr-only">
        {rating}/{totalStars}
      </span>
    </div>
  );
}

function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      version="1.1"
      width="18"
      height="16"
      viewBox="0 0 18 16"
    >
      <defs>
        <clipPath id="master_svg0_85_3871">
          <rect x="0" y="0" width="16.75" height="16" rx="0" />
        </clipPath>
      </defs>
      <g>
        <rect x="0" y="0" width="18" height="16" rx="0" fill="#000000" fillOpacity="0" />
        <g clipPath="url(#master_svg0_85_3871)">
          <g transform="matrix(1,0,0,-1,0,32.69061279296875)">
            <g>
              <path
                d="M9.281249904632569,31.784406396484375Q8.999999904632569,32.31560639648438,8.374999904632569,32.34690639648437Q7.781249904632569,32.31560639648438,7.468749904632569,31.784406396484375L5.468749904632569,27.659406396484375L0.9687499046325684,26.971906396484375Q0.3749999046325684,26.878106396484377,0.18749990463256835,26.315616396484373Q-9.536743164617612e-8,25.721866396484373,0.4374999046325684,25.284366396484373L3.6874999046325683,22.065616396484373L2.9062499046325683,17.503116396484376Q2.8437499046325683,16.909369396484376,3.3124999046325683,16.534369396484376Q3.8124999046325683,16.190619396484376,4.374999904632569,16.471869396484376L8.374999904632569,18.596866396484376L12.406249904632569,16.471869396484376Q12.937449904632569,16.190619396484376,13.437449904632569,16.534369396484376Q13.937449904632569,16.909369396484376,13.843749904632569,17.503116396484376L13.093749904632569,22.065616396484373L16.343749904632567,25.284366396484373Q16.74994990463257,25.721866396484373,16.593749904632567,26.315616396484373Q16.37494990463257,26.878106396484377,15.781249904632569,26.971906396484375L11.281249904632569,27.659406396484375L9.281249904632569,31.784406396484375Z"
                fill="#FACC15"
                fillOpacity="1"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

function EmptyStarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      version="1.1"
      width="18"
      height="16"
      viewBox="0 0 18 16"
    >
      <defs>
        <clipPath id="master_svg0_85_00336">
          <rect x="0" y="0" width="16.6875" height="16" rx="0" />
        </clipPath>
      </defs>
      <g>
        <rect x="0" y="0" width="18" height="16" rx="0" fill="#000000" fillOpacity="0" />
        <g clipPath="url(#master_svg0_85_00336)">
          <g transform="matrix(1,0,0,-1,0,32.51666259765625)">
            <g>
              <path
                d="M8.343745850524902,32.26663129882812Q8.812495850524902,32.235431298828125,9.031245850524902,31.829131298828123L11.156285850524903,27.422931298828125L15.937485850524903,26.735431298828125Q16.406285850524903,26.641631298828123,16.5624858505249,26.204161298828126Q16.6874858505249,25.766661298828126,16.3749858505249,25.454161298828126L12.906285850524903,22.016661298828126L13.718785850524903,17.141664298828125Q13.781285850524903,16.704164298828125,13.406285850524903,16.391664298828125Q13.031285850524903,16.141664298828125,12.624985850524903,16.360414298828125L8.343745850524902,18.641661298828126L4.062495850524902,16.360414298828125Q3.6562458505249023,16.141664298828125,3.2812458505249023,16.422914298828125Q2.9062458505249023,16.704164298828125,2.9687458505249023,17.141664298828125L3.7812458505249023,22.016661298828126L0.31249985052490237,25.454161298828126Q1.5052490234812588e-7,25.766661298828126,0.12500015052490235,26.204161298828126Q0.28124985052490237,26.641631298828123,0.7499998505249024,26.735431298828125L5.531245850524902,27.422931298828125L7.656245850524902,31.829131298828123Q7.874995850524902,32.235431298828125,8.343745850524902,32.26663129882812ZM8.343745850524902,29.797931298828125L6.687495850524902,26.422931298828125L8.343745850524902,29.797931298828125L6.687495850524902,26.422931298828125Q6.531245850524902,26.079161298828126,6.124995850524902,25.985411298828126L2.4374958505249023,25.454161298828126L5.124995850524902,22.797911298828126Q5.374995850524902,22.516661298828126,5.343745850524902,22.141661298828126L4.687495850524902,18.391661298828126L7.999995850524902,20.141661298828126Q8.343745850524902,20.329161298828126,8.687495850524902,20.141661298828126L11.968785850524903,18.391661298828126L11.343785850524903,22.141661298828126Q11.281285850524903,22.516661298828126,11.562485850524903,22.797911298828126L14.249985850524903,25.454161298828126L10.562485850524903,25.985411298828126Q10.156285850524903,26.079161298828126,9.999995850524902,26.422931298828125L8.343745850524902,29.797931298828125Z"
                fill="#FACC15"
                fillOpacity="1"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

function HalfStarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      version="1.1"
      width="16.75"
      height="16"
      viewBox="0 0 16.75 16"
    >
      <defs>
        <clipPath id="master_svg0_85_3851">
          <rect x="0" y="0" width="16.75" height="16" rx="0" />
        </clipPath>
      </defs>
      <g clip-path="url(#master_svg0_85_3851)">
        <g transform="matrix(1,0,0,-1,0,32.69061279296875)">
          <g>
            <path
              d="M8.374999904632569,20.596866396484373L9.218749904632569,20.159366396484376L11.874949904632569,18.721866396484376L11.343749904632569,21.784366396484373L11.187449904632569,22.659366396484373L11.843749904632569,23.315616396484373L14.031249904632569,25.471866396484373L11.031249904632569,25.909366396484373L10.124999904632569,26.065616396484373L9.718749904632569,26.878106396484377L8.374999904632569,29.628106396484377L8.374999904632569,20.596866396484373ZM13.843749904632569,17.503116396484376Q13.937449904632569,16.909369396484376,13.437449904632569,16.534369396484376Q12.937449904632569,16.190619396484376,12.374949904632569,16.471869396484376L8.374999904632569,18.596866396484376L4.374999904632569,16.471869396484376Q3.8124999046325683,16.190619396484376,3.3124999046325683,16.534369396484376Q2.8437499046325683,16.909369396484376,2.9062499046325683,17.503116396484376L3.6874999046325683,22.065616396484373L0.4374999046325684,25.284366396484373Q-9.536743164617612e-8,25.721866396484373,0.18749990463256835,26.315616396484373Q0.3749999046325684,26.878106396484377,0.9687499046325684,26.971906396484375L5.468749904632569,27.659406396484375L7.468749904632569,31.784406396484375Q7.781249904632569,32.31560639648438,8.374999904632569,32.34690639648437Q8.999999904632569,32.31560639648438,9.281249904632569,31.784406396484375L11.281249904632569,27.659406396484375L15.781249904632569,26.971906396484375Q16.37494990463257,26.878106396484377,16.593749904632567,26.315616396484373Q16.74994990463257,25.721866396484373,16.343749904632567,25.284366396484373L13.093749904632569,22.065616396484373L13.843749904632569,17.503116396484376Z"
              fill="#FACC15"
              fillOpacity="1"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}
