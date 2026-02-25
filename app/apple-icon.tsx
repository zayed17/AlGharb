import { ImageResponse } from 'next/og';

export const size = {
  width: 180,
  height: 180,
};

export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#2b64a1',
          color: '#ffffff',
          fontSize: 80,
          fontWeight: 800,
          letterSpacing: -2,
        }}
      >
        AG
      </div>
    ),
    {
      ...size,
    }
  );
}

