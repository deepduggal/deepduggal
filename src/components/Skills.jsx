import React from 'react';
import { ChipSet, Chip } from '@rmwc/chip';
import skills from '../data/skills';

function Skills() {
  return (
    <ChipSet>
      {skills.map(label => <Chip key={label} label={label}></Chip>)}
    </ChipSet>
  );
}
export default Skills;