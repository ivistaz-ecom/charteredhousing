import Image from 'next/image'

const BankLogo = ({ logo }) => {
  return (
    <div>
      <Image src={logo.logoUrl} alt="bank-logo" width={125} height={65} />
    </div>
  )
}

export default BankLogo
