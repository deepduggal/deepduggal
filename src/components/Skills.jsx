import React from 'react';
import { ChipSet, Chip } from '@rmwc/chip';

const skillsData = ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Expo', 'React Native', 'Express JS', 'MongoDB', 'Mongoose JS', 'Jest', 'React Native Testing Library'];

function Skills() {
  return (
    <ChipSet>
      {skillsData.map(label => <Chip key={label} label={label}>{label}</Chip>)}
    </ChipSet>
  );
}
export default Skills;