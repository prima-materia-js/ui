import type { Meta, StoryObj } from '@storybook/react';
import ThemeConfiguration, {
  Theme,
  DEFAULT_LIGHT_THEME,
  DEFAULT_DARK_THEME,
} from './ThemeConfiguration';
import Card from '../containers/Card';
import Paragraph from '../text/Paragraph';
import Button from '../forms/Button';
import ButtonContainer from '../forms/ButtonContainer';
import TextArea from '../forms/TextArea';
import TextInput from '../forms/TextInput';
import Select from '../forms/Select';
import { PropsWithChildren, useState } from 'react';
import Checkbox from '../forms/Checkbox';
import { TabContainer, Tab } from '../containers/TabContainer';
import Text from '../text/Text';
import ThemeToggle from './ThemeToggle';
import BrowserFrame from '../storybook/BrowserFrame';
import Heading from '../text/Heading';
import SingleColumnPageWithHeader from '../page_layouts/SingleColumnPageWithHeader';
import ExampleContent from '../storybook/ExampleContent';
import { NavLink, NavLinkSection } from '../text/NavLink';
import Sidebar from '../containers/Sidebar';
import PageWithLeftSidebar from '../page_layouts/PageWithLeftSidebar';
import ConfirmationDialog from '../modals/ConfirmationDialog';
import NoticeCard from '../containers/NoticeCard';

const ThemeCustomization: React.FC<PropsWithChildren<Theme>> = (theme) => {
  const [name, setName] = useState('John Smith');
  const [bio, setBio] = useState('');
  const [role, setRole] = useState<string | null>(null);
  const [website, setWebsite] = useState('example.com');
  const [sendUpdates, setSendUpdates] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <ThemeConfiguration lightTheme={theme}>
      <Heading type="page-title">Theme playground</Heading>

      <Card>
        <ThemeToggle />

        <NoticeCard type="info" title="Customisations apply to light mode only">
          The colors set below will only apply to the light mode theme. Dark
          mode colors are hardcoded in this storybook.
        </NoticeCard>
      </Card>

      <Heading type="section-title">Sample page content</Heading>
      <Card>
        <TextInput
          label="Display name"
          helpText="Your name as it should appear on your profile."
          value={name}
          onChange={setName}
        />
        <TextArea
          label="Bio"
          helpText="Tell everyone about yourself"
          value={bio}
          onChange={setBio}
        />
        <Select
          label="I am a"
          options={[
            'Software Engineer',
            'Cloud Architect',
            'Data Engineer',
            'UX Designer',
            'DevOps Engineer',
            'Network Engineer',
          ].map((s) => ({ label: s, value: s }))}
          onChange={setRole}
          value={role}
        />
        <TextInput
          label="Website"
          helpText="Share a link to your work"
          value={website}
          prefix="https://"
          onChange={setWebsite}
        />
        <Checkbox
          label="Send me weekly updates"
          checked={sendUpdates}
          onChange={setSendUpdates}
        />
        <ButtonContainer>
          <Button label="Save" onClick={() => {}} colour="highlight" />
          <Button label="Cancel" onClick={() => {}} />
        </ButtonContainer>
      </Card>

      <TabContainer>
        <Tab id="tab_0" title="Theoden">
          <Card
            title="This is a card"
            footerContent={
              <>
                <Text>
                  The Lord of the Rings: Return of the King,{' '}
                  <a
                    href="https://www.youtube.com/watch?v=LPZrReZ5H9Q"
                    target="_blank"
                  >
                    J.R.R. Tolkien
                  </a>
                </Text>
              </>
            }
          >
            <Paragraph>
              Suddenly, the king cried to Snowmane and the horse sprang away.
              Behind him his banner blew in the wind, white horse upon a field
              of green, but he outpaced it. After him thundered the knights of
              his house, but he was ever before them. Éomer rode there, the
              white horsetail on his helm floating in his speed, and the front
              of the first éored roared like a breaker foaming to the shore, but
              Théoden could not be over taken.
            </Paragraph>
            <Paragraph>
              Fey he seemed, or the battle fury of his fathers ran like new fire
              within his veins, and he was borne up on Snowmane like a God of
              old, even as Oromë the Great in the battle of the Valar when the
              world was young. His golden shield was uncovered, and lo! it shown
              like an image of the sun, and the grass flamed into green about
              the white feet of his steed.
            </Paragraph>
          </Card>
        </Tab>
        <Tab id="tab_1" title="Gandalf">
          <Card>
            <Paragraph>
              “You cannot enter here,” said Gandalf, and the huge shadow halted.
              “Go back to the abyss prepared for you! Go back! Fall into the
              nothingness that awaits you and your Master. Go!” The Black Rider
              flung back his hood, and behold! he had a kingly crown; and yet
              upon no head visible was it set. The red fires shone between it
              and the mantled shoulders vast and dark. From a mouth unseen there
              came a deadly laughter. “Old fool!” he said. “Old fool! This is my
              hour. Do you not know Death when you see it? Die now and curse in
              vain!” And with that he lifted high his sword and flames ran down
              the blade.
            </Paragraph>
            <Paragraph>
              And in that very moment, away behind in some courtyard of the
              city, a cock crowed. Shrill and clear he crowed, recking nothing
              of war nor of wizardry, welcoming only the morning that in the sky
              far above the shadows of death was coming with the dawn. And as if
              in answer there came from far away another note. Horns, horns,
              horns, in dark Mindolluin's sides they dimly echoed. Great horns
              of the north wildly blowing. Rohan had come at last.
            </Paragraph>
            <Paragraph color="secondary" size="small">
              The Lord of the Rings: Return of the King
              <br />
              <Text color="subtle" size="small">
                J.R.R. Tolkien, 1955
              </Text>
            </Paragraph>
          </Card>
        </Tab>
        <Tab id="tab_2" title="Frodo">
          <Card>
            <Paragraph>
              And far away, as Frodo put on the Ring and claimed it for his own,
              even in Sammath Naur the very heart of his realm, the Power in
              Barad-dur was shaken, and the Tower trembled from its foundations
              to its proud and bitter crown. The Dark Lord was suddenly aware of
              him, and his Eye piercing all shadows looked across the plain to
              the door that he had made; and the magnitude of his own folly was
              revealed to him in a blinding flash, and all the devices of his
              enemies were at last laid bare.
            </Paragraph>
            <Paragraph>
              Then his wrath blazed in consuming flame, but his fear rose like a
              vast black smoke to choke him. For he knew his deadly peril and
              the thread upon which his doom now hung. From all his policies and
              webs of fear and treachery, from all his stratagems and wars his
              mind shook free; and throughout his realm a tremor ran, his slaves
              quailed, and his armies halted, and his captains suddenly
              steerless, bereft of will, wavered and despaired. For they were
              forgotten. The whole mind and purpose of the Power that wielded
              them was now bent with overwhelming force upon the Mountain.
            </Paragraph>
            <Paragraph color="secondary" size="small">
              The Lord of the Rings: Return of the King
              <br />
              <Text color="subtle" size="small">
                J.R.R. Tolkien, 1955
              </Text>
            </Paragraph>
          </Card>
        </Tab>
        <Tab id="tab_3" title="Gollum">
          <Card>
            <Paragraph>
              "No, and I don't want to," said Frodo. "I can't understand you. Do
              you mean to say that you, and the Elves, have let him live on
              after all those horrible deeds? Now at any rate he is as bad as an
              Orc, and just an enemy. He deserves death."
            </Paragraph>
            <Paragraph>
              "Deserves it! I daresay he does. Many that live deserve death.
              Some that die deserve life. Can you give it to them? Then do not
              be too eager to deal out death in judgement. For even the very
              wise cannot see all ends. I have no much hope that Gollum can be
              cured before he dies, but there is a chance of it. And he is bound
              up with the fate of the Ring. My heart tells me that he has some
              part to play yet, for good or ill, before the end; and when that
              comes, the pity of Bilbo may rule the fate of many- yours not
              least."
            </Paragraph>
            <Paragraph color="secondary" size="small">
              The Lord of the Rings: Fellowship of the Ring
              <br />
              <Text color="subtle" size="small">
                J.R.R. Tolkien, 1954
              </Text>
            </Paragraph>
          </Card>
        </Tab>
      </TabContainer>

      <NoticeCard type="info" title="This is a notice card">
        In rode the Lord of the Nazgûl. A great black shape against the fires
        beyond he loomed up, grown to a vast menace of despair. In rode the Lord
        of the Nazgûl, under the archway that no enemy ever yet had passed, and
        all fled before his face.
      </NoticeCard>
      <NoticeCard type="warning" title="This is a notice card">
        In rode the Lord of the Nazgûl. A great black shape against the fires
        beyond he loomed up, grown to a vast menace of despair. In rode the Lord
        of the Nazgûl, under the archway that no enemy ever yet had passed, and
        all fled before his face.
      </NoticeCard>
      <NoticeCard type="success" title="This is a notice card">
        In rode the Lord of the Nazgûl. A great black shape against the fires
        beyond he loomed up, grown to a vast menace of despair. In rode the Lord
        of the Nazgûl, under the archway that no enemy ever yet had passed, and
        all fled before his face.
      </NoticeCard>
      <NoticeCard type="error" title="This is a notice card">
        In rode the Lord of the Nazgûl. A great black shape against the fires
        beyond he loomed up, grown to a vast menace of despair. In rode the Lord
        of the Nazgûl, under the archway that no enemy ever yet had passed, and
        all fled before his face.
      </NoticeCard>

      <ConfirmationDialog
        title="Sign out?"
        message="Are you sure you want to sign out?"
        onCancel={() => {
          setShowModal(false);
        }}
        onConfirm={() => {
          setShowModal(false);
        }}
        visible={showModal}
      />

      <Heading type="section-title">Single-column page layout</Heading>
      <BrowserFrame>
        <SingleColumnPageWithHeader
          logo={<>🐱 My app</>}
          navLinks={[
            { title: 'Home', href: '/' },
            { title: 'About', href: '/about' },
            { title: 'Contact', href: '/contact' },
          ]}
          rightContent={
            <Button
              label="Sign out"
              onClick={() => {
                setShowModal(true);
              }}
            />
          }
        >
          <ExampleContent>Content</ExampleContent>
        </SingleColumnPageWithHeader>
      </BrowserFrame>

      <Heading type="section-title">Left navbar page layout</Heading>
      <BrowserFrame>
        <PageWithLeftSidebar
          sidebar={
            <Sidebar appName="🐱 My app" homeHref="#">
              <NavLink href="/" label="Home" />
              <NavLink href="/about" label="About" />
              <NavLink href="/contact" label="Contact" />
              <NavLinkSection title="Projects">
                <NavLink href="/list" label="Project list" />
                <NavLink href="/join" label="Join a project" />
              </NavLinkSection>
            </Sidebar>
          }
        >
          <ExampleContent>Content</ExampleContent>
        </PageWithLeftSidebar>
      </BrowserFrame>
    </ThemeConfiguration>
  );
};

const meta: Meta<typeof ThemeCustomization> = {
  component: ThemeCustomization,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ThemeCustomization>;

export const Example: Story = {
  args: {
    ...DEFAULT_LIGHT_THEME,
  },
  name: 'Theme customisation playground (affects only light theme)',
  argTypes: {
    primaryAccentColor: {
      control: {
        type: 'color',
        presetColors: [
          DEFAULT_LIGHT_THEME.primaryAccentColor,
          DEFAULT_DARK_THEME.primaryAccentColor,
        ],
        labels: ['Default light theme', 'Default dark theme'],
      },
    },
    formInputBaseColor: {
      control: {
        type: 'color',
        presetColors: [
          DEFAULT_LIGHT_THEME.formInputBaseColor,
          DEFAULT_DARK_THEME.formInputBaseColor,
        ],
        labels: ['Default light theme', 'Default dark theme'],
      },
    },
    bodyTextColor: {
      control: {
        type: 'color',
        presetColors: [
          DEFAULT_LIGHT_THEME.bodyTextColor,
          DEFAULT_DARK_THEME.bodyTextColor,
        ],
        labels: ['Default light theme', 'Default dark theme'],
      },
    },
    backgroundColor: {
      control: {
        type: 'color',
        presetColors: [
          DEFAULT_LIGHT_THEME.backgroundColor,
          DEFAULT_DARK_THEME.backgroundColor,
        ],
        labels: ['Default light theme', 'Default dark theme'],
      },
    },
    cardColor: {
      control: {
        type: 'color',
        presetColors: [
          DEFAULT_LIGHT_THEME.cardColor,
          DEFAULT_DARK_THEME.cardColor,
        ],
        labels: ['Default light theme', 'Default dark theme'],
      },
    },
    sidebarColor: {
      control: {
        type: 'color',
        presetColors: [
          DEFAULT_LIGHT_THEME.sidebarColor,
          DEFAULT_DARK_THEME.sidebarColor,
        ],
        labels: ['Default light theme', 'Default dark theme'],
      },
    },
  },
};
