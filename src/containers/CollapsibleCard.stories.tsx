import type { Meta, StoryObj } from '@storybook/react';
import CollapsibleCard from './CollapsibleCard';
import { FaGalacticSenate } from 'react-icons/fa6';

const meta: Meta<typeof CollapsibleCard> = {
  component: CollapsibleCard,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CollapsibleCard>;

export const BasicCard: Story = {
  render: (args) => (
    <CollapsibleCard title={args.title}>
      <div>
        Bavaria ipsum dolor sit amet Freibia schüds nei kloan Resi fias, eana
        wos Resi nia. Ognudelt Auffisteign i waar soweid noch da Giasinga Heiwog
        pfenningguat fias gor des is schee, griasd eich midnand. Ewig und drei
        Dog hod a geh bittschön mogsd a Bussal Freibia damischa Charivari!
      </div>
      <div>
        Ramasuri Auffisteign Deandlgwand fensdaln nix Gwiass woass ma ned
        g’hupft wia gsprunga blärrd amoi kimmt, samma. Gscheit des basd scho
        wiavui, back mas Brodzeid Schuabladdla heid gfoids ma sagrisch guad
        Weißwiaschd Schneid! Baddscher und Vergeltsgott Edlweiss, gscheit.
        Greaßt eich nachad a geh so schee auf’d Schellnsau sog i, no. An heid
        gfoids ma sagrisch guad Enzian, wo hi Leonhardifahrt schaugn
        Schdarmbeaga See Schdeckalfisch di hi? Diandldrahn Radi wos Sauwedda
        umananda wia nix, auffi heid Fingahaggln: A gschmeidig Wurscht!
      </div>
    </CollapsibleCard>
  ),
  args: {
    title: 'Click me to expand',
  },
};

export const CardWithIcon: Story = {
  render: (args) => (
    <CollapsibleCard
      title={
        <>
          <FaGalacticSenate /> {args.title}
        </>
      }
    >
      <div>
        Bavaria ipsum dolor sit amet Freibia schüds nei kloan Resi fias, eana
        wos Resi nia. Ognudelt Auffisteign i waar soweid noch da Giasinga Heiwog
        pfenningguat fias gor des is schee, griasd eich midnand. Ewig und drei
        Dog hod a geh bittschön mogsd a Bussal Freibia damischa Charivari!
      </div>
      <div>
        Ramasuri Auffisteign Deandlgwand fensdaln nix Gwiass woass ma ned
        g’hupft wia gsprunga blärrd amoi kimmt, samma. Gscheit des basd scho
        wiavui, back mas Brodzeid Schuabladdla heid gfoids ma sagrisch guad
        Weißwiaschd Schneid! Baddscher und Vergeltsgott Edlweiss, gscheit.
        Greaßt eich nachad a geh so schee auf’d Schellnsau sog i, no. An heid
        gfoids ma sagrisch guad Enzian, wo hi Leonhardifahrt schaugn
        Schdarmbeaga See Schdeckalfisch di hi? Diandldrahn Radi wos Sauwedda
        umananda wia nix, auffi heid Fingahaggln: A gschmeidig Wurscht!
      </div>
    </CollapsibleCard>
  ),
  args: {
    title: 'Click me to expand',
  },
};
