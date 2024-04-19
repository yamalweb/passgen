import './App.css'

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Heading,
    Text,
    Button,
    Image,
    Stack,
    FormControl,
    FormLabel,
    Switch,
    SimpleGrid,
    Container,
    Box,
} from '@chakra-ui/react'

import SliderMarkExample from './components/SliderMarkExample'
import { useState } from 'react'
import { useEffect } from 'react'

function App() {
    const [pass, setPass] = useState('')
    const [range, setRange] = useState(8)
    const [isDigital, setIsDigital] = useState(true)
    const [isWordLow, setIsWordLow] = useState(true)
    const [isWordHight, setIsWordHight] = useState(true)
    const [isSymbol, setIsSymbol] = useState(true)

    const genPass = () => {
        const arrDigital = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
        const arrWordLow = [
            'a',
            'b',
            'c',
            'd',
            'e',
            'f',
            'g',
            'h',
            'i',
            'j',
            'k',
            'l',
            'm',
            'n',
            'o',
            'p',
            'q',
            'r',
            's',
            't',
            'u',
            'v',
            'w',
            'x',
            'y',
            'z',
        ]
        const arrWordHight = [
            'A',
            'B',
            'C',
            'D',
            'E',
            'F',
            'G',
            'H',
            'I',
            'J',
            'K',
            'L',
            'M',
            'N',
            'O',
            'P',
            'Q',
            'R',
            'S',
            'T',
            'U',
            'V',
            'W',
            'X',
            'Y',
            'Z',
        ]
        const arrSymbol = [
            '!',
            '@',
            '#',
            '$',
            '%',
            '&',
            '?',
            '-',
            '+',
            '=',
            '~',
        ]
        const arr = []
        isDigital && arr.push(...arrDigital)
        isWordLow && arr.push(...arrWordLow)
        isWordHight && arr.push(...arrWordHight)
        isSymbol && arr.push(...arrSymbol)

        const randomSymbol = () =>
            arr[Math.floor(Math.random() * arr.length + 1)]

        let result = []
        let n = 0
        while (n < range) {
            result.push(randomSymbol())
            n++
        }
        return result.join('')
    }

    useEffect(() => {
        setPass(genPass())
    }, [])
    return (
        <div className="App">
            <Card align="center">
                <CardHeader>
                    <Image
                        src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        alt="Green double couch with wooden legs"
                        borderRadius="lg"
                        height={200}
                    />
                    <Stack mt="6" spacing="3">
                        <p>Пароль</p>
                        <Heading size="lg"> {pass}</Heading>
                    </Stack>
                </CardHeader>
                <CardBody></CardBody>
                <CardFooter>
                    <Button
                        colorScheme="blue"
                        onClick={() => setPass(genPass())}
                    >
                        Создать
                    </Button>
                </CardFooter>
            </Card>
            <Container maxW="3xl" centerContent>
                <Box padding="1" maxW="md">
                    <span>Длина пароля: </span>
                    <Text>{range}</Text>
                    <SliderMarkExample onChangeSlider={setRange} />
                    <Card align="center">
                        <FormControl
                            as={SimpleGrid}
                            columns={{ base: 2, lg: 4 }}
                        >
                            <FormLabel htmlFor="isDigital">Цифры:</FormLabel>
                            <Switch
                                id="isDigital"
                                onChange={() => setIsDigital(!isDigital)}
                                isChecked={isDigital}
                            />

                            <FormLabel htmlFor="isWordLow">
                                Прописные буквы:
                            </FormLabel>
                            <Switch
                                id="isWordLow"
                                onChange={() => setIsWordLow(!isWordLow)}
                                isChecked={isWordLow}
                            />

                            <FormLabel htmlFor="isWordHight">
                                Строчные буквы:
                            </FormLabel>
                            <Switch
                                id="isWordHight"
                                onChange={() => setIsWordHight(!isWordHight)}
                                isChecked={isWordHight}
                            />

                            <FormLabel htmlFor="isSymbol">
                                Спец. символы:
                            </FormLabel>
                            <Switch
                                id="isSymbol"
                                onChange={() => setIsSymbol(!isSymbol)}
                                isChecked={isSymbol}
                            />
                        </FormControl>
                    </Card>
                </Box>
            </Container>
        </div>
    )
}

export default App
