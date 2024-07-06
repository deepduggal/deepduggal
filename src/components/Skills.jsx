import React, { useEffect, useRef, useState } from 'react';
import { ChipSet, Chip } from '@rmwc/chip';
import skills from '../data/skills';

function Skills() {
  return (
    <ChipSet>
      {skills.map(label => <Chip icon={'check'} key={label} label={label}></Chip>)}
    </ChipSet>
  );
}
export default Skills;