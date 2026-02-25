import { ImageResponse } from 'next/og';

export const size = {
  width: 64,
  height: 64,
};

export const contentType = 'image/png';

export default function Icon() {
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
          fontSize: 28,
          fontWeight: 800,
          letterSpacing: -1,
          borderRadius: 12,
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

