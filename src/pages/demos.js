import React from 'react'
import CodepenEmbed from '../components/CodepenEmbed'
import { Typography } from '@rmwc/typography'
import DefaultLayout from '../templates/index.js'

const codepenSlugHashes = ['qrNWNy', 'xRBbKZ', 'aWXggZ', 'OpVrdR']

// TODO: Pass down styles (as className={css(styles.demo)}) from demos page to <CodepenEmbed>
function DemosPage() {
  return (
    <DefaultLayout>
      <Typography tag="h1" use="headline1">Demos</Typography>
      <Typography tag="h6" use="subtitle1">Small things I&rsquo;ve made.</Typography>
      {/* Demos Container */}
      <div className={'flex flex-row flex-wrap justify-evenly'}>
        {codepenSlugHashes.map(slug => <CodepenEmbed className='my-0 mx-auto p-4 w-full md:w-1/2 lg:w-1/4' height="564" slugHash={slug} />)}
      </div>
    </DefaultLayout>
  )
}

export default DemosPage
