export default {
  meta: {
    id: 'hotdog',
    uuid: '618422f6-48a6-43cd-849f-2e64ba7d3069',
    sort: '080275200',
    src: 'collegiate',
    section: 'alpha',
    stems: [
      'hotdog',
      'hotdogged',
      'hotdogger',
      'hotdoggers',
      'hotdogging',
      'hotdogs',
    ],
    offensive: false,
  },
  hwi: {
    hw: 'hot*dog',
    prs: [
      { mw: 'ˈhät-ˌdȯg', sound: { audio: 'hotdog01', ref: 'c', stat: '1' } },
    ],
  },
  fl: 'verb',
  ins: [{ if: 'hot*dogged' }, { if: 'hot*dog*ging' }, { if: 'hot*dogs' }],
  def: [
    {
      vd: 'intransitive verb',
      sseq: [
        [
          [
            'sense',
            {
              dt: [
                [
                  'text',
                  '{bc}to perform in a conspicuous or often ostentatious manner',
                ],
              ],
              sdsense: {
                sd: 'especially',
                dt: [
                  [
                    'text',
                    '{bc}to perform fancy stunts and maneuvers (as while surfing or skiing)',
                  ],
                ],
              },
            },
          ],
        ],
      ],
    },
  ],
  uros: [
    {
      ure: 'hot*dog*ger',
      prs: [
        {
          mw: 'ˈhät-ˌdȯ-gər',
          sound: { audio: 'hotdog02', ref: 'c', stat: '1' },
        },
      ],
      fl: 'noun',
    },
  ],
  et: [['text', '{et_link|hot dog:2|hot dog:2}']],
  date: '1963',
  shortdef: [
    'to perform in a conspicuous or often ostentatious manner; especially : to perform fancy stunts and maneuvers (as while surfing or skiing)',
  ],
};
